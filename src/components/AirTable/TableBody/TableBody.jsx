import React from 'react';

// material ui components
import MuiTableRow from '@material-ui/core/TableRow';
import MuiTableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './tableBodyStyle';

class TableCell extends React.Component {
    render() {
        const { value, ...props } = this.props;
        const renderValue = Array.isArray(value) ? value.join(", ") : value;

        return <MuiTableCell {...props}>{renderValue}</MuiTableCell>;
    }
}

class TableBody extends React.Component {
    render() {
        const { classes, rows, columns } = this.props;
        return (
            <MuiTableBody classes={{ root: classes.root }}>
                {rows.map((row, index) => (
                    <MuiTableRow key={index}>
                        {columns.map((column) => {
                            const Component = column.TableCell || TableCell;
                            const value = row[column.id];
                            return (
                                <Component
                                    key={column.id}
                                    align={column.align}
                                    value={value}
                                    column={column}
                                    row={row}
                                />
                            );
                        })}
                    </MuiTableRow>
                ))}
            </MuiTableBody>
        );
    }
}

export default withStyles(styles)(TableBody);
