import React from 'react';
import cn from 'classnames';

// material ui components
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

// styles
import styles from './dropDownStyle';

class DropDown extends React.Component {
    state = {
        anchorEl: null,
        selectedItem: null
    };

    handleOpen(e) {
        this.setState({
            anchorEl: e.currentTarget
        });
    }

    handleClose() {
        this.setState({ anchorEl: null });
    }

    onSelectItem(item) {
        this.setState({
            anchorEl: null, // close dropdown menu
            selectedItem: item
        });
    }

    render() {
        if (!this.props.items || this.props.items.length === 0) {
            return <React.Fragment></React.Fragment>;
        }

        const selectedItem = this.state.selectedItem || this.props.items[0];
        const { anchorEl } = this.state;
        const { items, classes, otherClasses = {}, style } = this.props;
        return (
            <React.Fragment>
                <Button
                    variant="text"
                    onClick={this.handleOpen.bind(this)}
                    className={cn(classes.button, otherClasses.button)}
                    style={style}>
                    <Typography>{selectedItem.label}</Typography>
                    <KeyboardArrowDownIcon />
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
                    <MenuList>
                        {items.map((item) => (
                            <MenuItem
                                onClick={() => this.onSelectItem(item)}
                                key={item.label}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Popover>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(DropDown);
