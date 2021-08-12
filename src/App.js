import React from 'react';
import { observer, inject } from 'mobx-react';

// core components
import OrganizationTable from 'components/OrganizationTable/OrganizationTable';

class App extends React.Component {
    componentDidMount() {
        const { airtable } = this.props.store;
        airtable.fetchOrganization();
    }
    render() {
        const { airtable } = this.props.store;
        const { organization, orders } = airtable;
        console.log(organization, orders);

        return (
            <div className="App">
                <OrganizationTable />
            </div>
        );
    }
}

export default inject('store')(observer(App));
