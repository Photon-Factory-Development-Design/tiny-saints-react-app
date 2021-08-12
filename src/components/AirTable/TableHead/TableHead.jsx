import React from 'react';

// material ui components
import MuiTableRow from '@material-ui/core/TableRow';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableHead from '@material-ui/core/TableHead';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './tableHeadStyle.js';

class TableHead extends React.Component {
    render() {
        const { headerProps, classes, columns } = this.props;
        return (
            <MuiTableHead {...headerProps} className={classes.header}>
                <MuiTableRow>
                    {columns.map((column) => (
                        <MuiTableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            className={classes.tableCell}>
                            {column.label}
                        </MuiTableCell>
                    ))}
                </MuiTableRow>
            </MuiTableHead>
        );
    }
}

export default withStyles(styles)(TableHead);
