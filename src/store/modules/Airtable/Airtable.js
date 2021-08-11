import { observable, makeObservable } from 'mobx';
import BaseStore from '../../classes/BaseStore';

class Airtable extends BaseStore {
    constructor() {
        super(); 

        this.organization = null;
        makeObservable(this, {
            organization: observable
        });
    }
}

export default Airtable;
