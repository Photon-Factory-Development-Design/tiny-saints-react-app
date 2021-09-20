import React from 'react';
import { reaction } from 'mobx';
import { inject, observer } from 'mobx-react';
// material ui components
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

class OrganizationDropDown extends React.Component {
    state = {
        anchorEl: null,
        title: 'Organization'
    };

    componentDidMount() {
        this.props.store.airtable.fetchAllOrganizations();

        reaction(
            () => this.props.store.airtable.organizations,
            (organizations) => {
                this.onClickItem(organizations[0].name);
            }
        );
    }

    handleClick = (e) => {
        this.setState({ anchorEl: e.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    onClickItem = (name) => {
        this.setState({ title: name });
        this.handleClose();

        // set input field
        if (document.querySelector("input#organization")) {
            document.querySelector("input#organization").value = name;
        }
    }

    render() {
        const { anchorEl, title } = this.state;
        const { organizations } = this.props.store.airtable;

        console.log(organizations && organizations.length);

        return (
            <div>
                <Button
                    id="demo-customized-button"
                    aria-controls="demo-customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    disableElevation
                    onClick={this.handleClick}>
                    {title}
                </Button>
                <Menu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button'
                    }}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}>
                    {(organizations || []).map((item) => (
                        <MenuItem
                            key={item.name}
                            onClick={() => this.onClickItem(item.name)}
                            disableRipple>
                            {item.name}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default inject('store')(observer(OrganizationDropDown));
