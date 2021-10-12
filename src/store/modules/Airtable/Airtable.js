import { action, observable, makeObservable } from 'mobx';
import BaseStore from '../../classes/BaseStore';
import {
    fetchOrganizations,
    fetchOrders,
    fetchDetailOrder,
    createOrganization,
    updateCustomer,
    fetchCustomer
} from './service';
import {
    serializeOrder,
    serializeOrganization,
    serializeCustomer
} from './serializer';
import { updateObjectArray } from 'common/utils/arrayUtils';

class Airtable extends BaseStore {
    constructor() {
        super();

        this.organization = null;
        this.orders = null;
        this.organizations = null;
        this._detailOrder = null;
        this._customer = null;
        this._orderCustomer = null;

        makeObservable(this, {
            organization: observable,
            orders: observable,
            organizations: observable,
            _detailOrder: observable,
            _orderCustomer: observable,
            fetchOrganization: action,
            fetchOrders: action,
            createOrganization: action,
            updateCustomer: action,
            fetchAllOrganizations: action,
            fetchDetailOrder: action
        });
    }

    fetchOrganization(email) {
        this.organization = null;
        fetchOrganizations(email).eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const newData = serializeOrganization(record);
                this.organization = newData;
            });
        });
    }

    fetchOrders(email) {
        this.orders = [];
        this.organization = null;
        fetchOrganizations(email).eachPage((records) => {
            console.log(records);
            records.forEach((record) => {
                const newData = serializeOrganization(record);
                this.organization = newData;
            });

            if (this.organization) {
                fetchOrders(this.organization.name).eachPage((records) => {
                    records.forEach((record) => {
                        const newOrder = serializeOrder(record);
                        this.orders = updateObjectArray(
                            this.orders,
                            newOrder.id,
                            newOrder
                        );
                    });
                });
            }
        });
    }

    fetchAllOrganizations() {
        this.organizations = [];
        fetchOrganizations().eachPage((records, fetchNextPage) => {
            console.log(records);
            records.forEach((record) => {
                const newData = serializeOrganization(record);
                this.organizations = updateObjectArray(
                    this.organizations,
                    newData.id,
                    newData
                );
            });
        });
    }

    fetchDetailOrder(number) {
        this._detailOrder = null;
        fetchDetailOrder(number, (err, record) => {
            this._detailOrder = serializeOrder(record);
        });
    }

    fetchCustomer(id) {
        this._orderCustomer = null;
        fetchCustomer(id, (err, record) => {
            this._orderCustomer = serializeCustomer(record);
        });
    }

    createOrganization(data, callback) {
        createOrganization(data, callback);
    }

    updateCustomer(email) {
        updateCustomer(email);
    }
}

export default Airtable;
