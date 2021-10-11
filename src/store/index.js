import BaseStore from './classes/BaseStore';
import Airtable from './modules/Airtable/Airtable';

class Store extends BaseStore {
    constructor(props) {
        super(props);

        this.airtable = new Airtable({ parent: this });
    }
}

const store = new Store();
window.store = store;
export default store;