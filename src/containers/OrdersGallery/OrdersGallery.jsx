import React from 'react';
import { inject, observer } from 'mobx-react';

// material ui components
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import GalleryView from 'components/GalleryView/GalleryView';

// styles
import styles from './ordersGalleryStyle';

const availableFields = [
    {
        id: 'shopifyID',
        label: '∞ Shopify Id'
    },
    {
        id: 'customer',
        label: 'Customer'
    },
    {
        id: 'fulfillmentStatus',
        label: 'Fulfillment Status'
    }
];
class OrdersGallery extends React.Component {
    generateViewValues(value) {
        return availableFields.map((field) => ({
            ...field,
            value: [null, undefined].includes(value[field.id])
                ? ''
                : value[field.id]
        }));
    }

    render() {
        const { classes } = this.props;
        const { orders } = this.props.store.airtable;

        return (
            <Box className={classes.container}>
                {(orders || []).map((order) => (
                    <GalleryView
                        key={order.name}
                        title={order.name}
                        values={this.generateViewValues(order)}
                        itemWidth={120}
                    />
                ))}
            </Box>
        );
    }
}

export default withStyles(styles)(inject('store')(observer(OrdersGallery)));
