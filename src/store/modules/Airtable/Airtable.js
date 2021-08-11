import { action, observable, makeObservable } from 'mobx';
import BaseStore from '../../classes/BaseStore';
import { fetchOrganizations, fetchOrders } from './service';
import { serializeOrder, serializeOrganization } from './serializer';

class Airtable extends BaseStore {
    constructor() {
        super();

        this.organization = null;
        this.orders = null;
        makeObservable(this, {
            organization: observable,
            orders: observable,
            fetchOrganization: action,
            fetchOrders: action
        });
    }

    fetchOrganization() {
        fetchOrganizations().eachPage((records, fetchNextPage) => {
            this.organization = [].concat(
                this.organization || [],
                records.map((record) => serializeOrganization(record))
            );

            if (this.organization.length > 0) {
                this.fetchOrders(this.organization[0].id);
            }
        });
    }

    fetchOrders(organization) {
        fetchOrders(organization).eachPage((records, fetchNextPage) => {
            this.orders = [].concat(
                this.orders || [],
                records.map((record) => serializeOrder(record))
            );
        });
    }
}

export default Airtable;
