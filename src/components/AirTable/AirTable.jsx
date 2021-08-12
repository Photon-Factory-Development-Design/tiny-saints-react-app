import React from 'react';

// material ui components
import MuiTable from '@material-ui/core/Table';
import MuiTableContainer from '@material-ui/core/TableContainer';

// core components
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

class AirTable extends React.Component {
    render() {
        const { containerProps, tableProps, columns, rows } = this.props;
        return (
            <MuiTableContainer {...containerProps}>
                <MuiTable {...tableProps}>
                    <TableHead columns={columns} />
                    <TableBody columns={columns} rows={rows} />
                </MuiTable>
            </MuiTableContainer>
        );
    }
}

export default AirTable;
