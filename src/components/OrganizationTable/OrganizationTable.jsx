import React from 'react';
import { inject, observer } from 'mobx-react';

// core components
import AirTable from 'components/AirTable/AirTable';

// columns
import columns from './columns';

class OrganizationTable extends React.Component {
    render() {
        const { airtable } = this.props.store;
        const { organization } = airtable;

        return <AirTable columns={columns} rows={organization || []} />;
    }
}

export default inject('store')(observer(OrganizationTable));
