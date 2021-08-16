import React from 'react';

// material ui components
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

// icons
import FilterListIcon from '@material-ui/icons/FilterList';

// core component
import FilterPaneItem from './FilterPaneItem';

class FilterPane extends React.Component {
    state = {
        open: false,
        anchorEl: null
    };

    handleOpen(e) {
        this.setState({
            anchorEl: e.currentTarget
        });
    }

    handleClose() {
        this.setState({ anchorEl: null });
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <React.Fragment>
                <Button variant="text" onClick={this.handleOpen.bind(this)}>
                    <FilterListIcon />
                    Filter
                </Button>
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={this.handleClose.bind(this)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}>
                    <FilterPaneItem />
                </Popover>
            </React.Fragment>
        );
    }
}

export default FilterPane;
