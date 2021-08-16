import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// icons
import CloseIcon from '@material-ui/icons/Close';

// core components
import DropDown from 'components/DropDown/DropDown';

const combineItems = [
    {
        label: 'Or'
    },
    { label: 'And' }
];

const fields = [
    { label: 'Name' },
    { label: 'Phone Number' },
    { label: 'Diocese' },
    { label: 'Website' },
    { label: 'Tax ID' }
];

class FilterPaneItem extends React.Component {
    render() {
        return (
            <Box display="flex" flexDirection="row">
                <Button variant="text">
                    <CloseIcon />
                </Button>
                <DropDown items={combineItems} />
                <DropDown items={fields || []} />
            </Box>
        );
    }
}

export default FilterPaneItem;
