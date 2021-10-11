import './fundraiserToolkit.scss';

import moment from 'moment';
import React from 'react';
import { inject, observer } from 'mobx-react';
// material ui components
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

class FundraiserToolkit extends React.PureComponent {
    fetchFundraiserInfo() {}

    componentDidMount() {
        window.store.airtable.fetchOrders('phoenix.ts1991@gmail.com');
    }

    render() {
        const { airtable } = this.props.store;
        const { organization, orders } = airtable;

        return (
            <Container>
                <div className="fundraiser-toolkit">
                    <h2 className="fundraiser-toolkit__title">
                        Fundraiser Toolkit
                    </h2>

                    <Grid container className="fundraiser-toolkit__summary">
                        <Grid
                            item
                            xs={12}
                            md={4}
                            className="fundraiser-toolkit__summary__item">
                            <h3 className="fundraiser-toolkit__summary__item__title">
                                Your Organization
                            </h3>
                            <h6>{organization && organization.name}</h6>
                            {organization &&
                                organization.address &&
                                organization.address
                                    .split(',')
                                    .map((item) => <h6 key={item}>{item}</h6>)}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            className="fundraiser-toolkit__summary__item">
                            <h3 className="fundraiser-toolkit__summary__item__title">
                                Marketing & Activities
                            </h3>
                        </Grid>
                        <Grid className="fundraiser-toolkit__summary__item">
                            <h3 className="fundraiser-toolkit__summary__item__title">
                                Funds Raised To Date
                            </h3>
                        </Grid>
                    </Grid>

                    <Table
                        size="small"
                        aria-label="a dense table"
                        className="fundraiser-toolkit__table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Order Number</TableCell>
                                <TableCell>Order Date</TableCell>
                                <TableCell>Order Amount</TableCell>
                                <TableCell>Funds Raised</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(orders || []).map((order) => (
                                <TableRow>
                                    <TableCell px={1}>{order.name}</TableCell>
                                    <TableCell px={1}>
                                        {moment(order.createdAt).format(
                                            'MM/DD/YYYY'
                                        )}
                                    </TableCell>
                                    <TableCell px={1}>${order.total}</TableCell>
                                    <TableCell px={1}></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Container>
        );
    }
}

export default inject('store')(observer(FundraiserToolkit));
