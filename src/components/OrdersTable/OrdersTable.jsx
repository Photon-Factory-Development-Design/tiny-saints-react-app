import React from 'react';
import { inject, observer } from 'mobx-react';

// core components
import AirTable from 'components/AirTable/AirTable';

// columns
import columns from './columns';

class OrdersTable extends React.Component {
    render() {
        const { orders } = this.props.store.airtable;
        return <AirTable columns={columns} rows={orders || []} />;
    }
}

export default inject('store')(observer(OrdersTable));
