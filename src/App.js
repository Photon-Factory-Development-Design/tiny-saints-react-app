import React from 'react';
import { observer, inject } from 'mobx-react';

// material ui components
import ThemeProvider from '@material-ui/styles/ThemeProvider';

// theme
import rootTheme from 'theme';

// core components
import DropDown from 'components/DropDown/DropDown';
import FilterPane from 'components/FilterPane/FilterPane';
import OrdersTable from 'components/OrdersTable/OrdersTable';
import OrganizationTable from 'components/OrganizationTable/OrganizationTable';
import OrganizationGallery from 'containers/OrganizationGallery/OrganizationGallery';

class App extends React.Component {
    componentDidMount() {
        const { airtable } = this.props.store;
        airtable.fetchOrganization(window.email);
    }

    render() {
        const { type } = this.props;
        return (
            <ThemeProvider theme={rootTheme}>
                <div className="App">
                    {type === 'organizations' && <OrganizationTable />}
                    {type === 'orders' && <OrdersTable />}
                    <FilterPane />
                    <DropDown
                        items={[{ label: 'Name' }, { label: 'Start Date' }]}
                    />
                    <OrganizationGallery />
                </div>
            </ThemeProvider>
        );
    }
}

export default inject('store')(observer(App));
