import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './galleryViewStyle';

class GalleryView extends React.Component {
    render() {
        const { title, values, classes, itemWidth = 88 } = this.props;

        return (
            <Box className={classes.container}>
                <Box className={classes.titleContainer}>
                    <Typography className={classes.title}>{title}</Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="flex-start">
                    {(values || []).map(
                        ({
                            label,
                            value,
                            icon: IconComponent,
                            Component: ItemComponent
                        }) => {
                            const Component = ItemComponent || Box;
                            return (
                                <Box
                                    key={label}
                                    className={classes.valueContainer}
                                    style={{
                                        width: itemWidth,
                                        minWidth: itemWidth
                                    }}>
                                    <Box className={classes.valueLabel}>
                                        {IconComponent && (
                                            <IconComponent
                                                className={classes.labelIcon}
                                            />
                                        )}
                                        {label}
                                    </Box>
                                    <Component
                                        className={classes.value}
                                        value={value}>
                                        {value}&nbsp;
                                    </Component>
                                </Box>
                            );
                        }
                    )}
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(GalleryView);
