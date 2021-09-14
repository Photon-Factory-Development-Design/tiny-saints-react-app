import { action, observable, makeObservable } from 'mobx';
import BaseStore from '../../classes/BaseStore';
import {
    fetchOrganizations,
    fetchOrders,
    createOrganization,
    updateCustomer
} from './service';
import { serializeOrder, serializeOrganization } from './serializer';
import { updateObjectArray } from 'common/utils/arrayUtils';

class Airtable extends BaseStore {
    constructor() {
        super();

        this.organization = null;
        this.orders = null;
        makeObservable(this, {
            organization: observable,
            orders: observable,
            fetchOrganization: action,
            fetchOrders: action,
            createOrganization: action,
            updateCustomer: action
        });
    }

    fetchOrganization(email) {
        this.organization = [];
        fetchOrganizations(email).eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const newData = serializeOrganization(record);
                this.organization = updateObjectArray(
                    this.organization,
                    newData.id,
                    newData
                );
            });

            if (this.organization.length > 0) {
                this.fetchOrders(this.organization[0].id);
            }
        });
    }

    fetchOrders(organization) {
        this.orders = [];
        fetchOrders(organization).eachPage((records, fetchNextPage) => {
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

    createOrganization(data, callback) {
        createOrganization(data, callback);
    }

    updateCustomer(email) {
        updateCustomer(email);
    }
}

export default Airtable;
