import React from 'react';
import { inject, observer } from 'mobx-react';

// material ui components
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import GalleryView from 'components/GalleryView/GalleryView';
import AttachmentsView from 'components/GalleryView/ViewComponents/AttachmentsView';

// styles
import styles from './organizationGalleryStyle';

// icons
import PhoneIcon from '@material-ui/icons/Phone';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import LinkIcon from '@material-ui/icons/Link';
import BusinessIcon from '@material-ui/icons/Business'; // mailing address
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; // status
import FileCopyIcon from '@material-ui/icons/FileCopy'; // file attachments

const availableFields = [
    { label: 'Phone Number', icon: PhoneIcon, id: 'phoneNumber' },
    { label: 'Diocese', icon: TextFormatIcon, id: 'diocese' },
    { label: 'Website', icon: LinkIcon, id: 'website' },
    { label: 'Tax ID', icon: TextFormatIcon, id: 'taxID' },
    { label: 'Mailing address', icon: BusinessIcon, id: 'mailingAddress' },
    { label: 'Status', icon: ArrowDropDownIcon, id: 'status' },
    {
        label: 'Attachments',
        icon: FileCopyIcon,
        id: 'attachments',
        Component: AttachmentsView
    }
];

class OrganizationGallery extends React.Component {
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
        const { airtable } = this.props.store;
        const { organization } = airtable;

        // console.log(organization && this.generateViewValues(organization[0]));
        return (
            <Box className={classes.container}>
                {(organization || []).map((value) => (
                    <GalleryView
                        key={value.name}
                        title={value.name}
                        values={this.generateViewValues(value)}
                    />
                ))}
            </Box>
        );
    }
}

export default withStyles(styles)(
    inject('store')(observer(OrganizationGallery))
);
