import React from 'react';
import { inject, observer } from 'mobx-react';
// material ui components
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import withStyles from '@material-ui/core/styles/withStyles';
// styles
import styles from './orgOrdersListStyle';

class OrgOrdersList extends React.Component {
    componentDidMount() {
        // TODO: fetch organization & fetch org orders list;
        this.fetchOrders();
    }

    fetchOrders(email) {
        // const { airtable } = this.props.store;
        // airtable.fetchOrganization(email);
    }
    render() {
        const { classes } = this.props;
        const { orders } = this.props.store.airtable;
        return (
            <React.Fragment>
                <Table
                    className={classes.table}
                    size="small"
                    aria-label="a dense table">
                    <TableHead>
                        <TableRow className={classes.headerRow}>
                            <TableCell>Order</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody class={classes.tableBody}>
                        {(orders || []).map((order) => (
                            <TableRow>
                                <TableCell px={1} className={classes.orderName}>
                                    {order.name}
                                </TableCell>
                                <TableCell px={1}>
                                    {order.financialStatus}
                                </TableCell>
                                <TableCell px={1}>${order.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(inject('store')(observer(OrgOrdersList)));
