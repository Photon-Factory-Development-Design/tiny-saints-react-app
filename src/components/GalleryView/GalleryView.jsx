import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './galleryViewStyle';

class GalleryView extends React.Component {
    render() {
        const { title, values, classes } = this.props;

        return (
            <Box className={classes.container}>
                <Box className={classes.titleContainer}>
                    <Typography className={classes.title}>{title}</Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                    {(values || []).map(({ label, value }) => (
                        <Box key={label} className={classes.valueContainer}>
                            <Box className={classes.valueLabel}>{label}</Box>
                            <Box className={classes.value}>{value}</Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(GalleryView);
