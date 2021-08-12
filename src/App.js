import React from 'react';
import { observer, inject } from 'mobx-react';

// core components
import OrdersTable from 'components/OrdersTable/OrdersTable';
import OrganizationTable from 'components/OrganizationTable/OrganizationTable';

class App extends React.Component {
    componentDidMount() {
        const { airtable } = this.props.store;
        airtable.fetchOrganization(window.email);
    }

    render() {
        const { type } = this.props;
        return (
            <div className="App">
                {type === 'organizations' && <OrganizationTable />}
                {type === 'orders' && <OrdersTable />}
            </div>
        );
    }
}

export default inject('store')(observer(App));
