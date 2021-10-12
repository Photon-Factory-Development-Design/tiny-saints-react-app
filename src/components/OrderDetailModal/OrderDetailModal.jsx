import React from 'react';
import { observer, inject } from 'mobx-react';
import { reaction } from 'mobx';
// material ui components
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

class OrderDetailModal extends React.PureComponent {
    fetchOrderDetail = () => {
        const { airtable } = this.props.store;

        airtable.fetchDetailOrder(this.props.id);

        reaction(
            () => airtable._detailOrder,
            (_detailOrder) => {
                airtable.fetchCustomer(_detailOrder.customer[0]);
            }
        );
    };

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.fetchOrderDetail();
        }
    }

    componentDidMount() {
        this.fetchOrderDetail();
    }

    render() {
        const { _detailOrder, _orderCustomer } = this.props.store.airtable;

        return (
            <Dialog
                className="order-detail-modal"
                open={this.props.open}
                handleClose={this.props.handleClose}>
                <DialogTitle id="alert-dialog-title">Order Detail</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            className="order-detail-modal__item">
                            <h3>Customer</h3>
                            <div>
                                <strong>Email: </strong>{' '}
                                {_orderCustomer && _orderCustomer.email}
                            </div>
                            <div>
                                <strong>First Name: </strong>{' '}
                                {_orderCustomer && _orderCustomer.firstName}
                            </div>
                            <div>
                                <strong>Last Name: </strong>{' '}
                                {_orderCustomer && _orderCustomer.lastName}
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h3>Order</h3>
                            <div>
                                <strong>Name:</strong> $
                                {_detailOrder && _detailOrder.name}
                            </div>
                            <div>
                                <strong>Financial Status:</strong> $
                                {_detailOrder && _detailOrder.financialStatus}
                            </div>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default inject('store')(observer(OrderDetailModal));
