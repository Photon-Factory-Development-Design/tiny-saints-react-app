class BaseStore {
    // Do not forget to call super(props) at heir classes constructors;
    constructor({ parent = null, load = true } = {}) {
        this.parent = parent;
    }
}

export default BaseStore;
