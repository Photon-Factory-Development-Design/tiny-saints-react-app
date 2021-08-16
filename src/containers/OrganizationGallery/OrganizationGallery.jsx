import React from 'react';

// core components
import GalleryView from 'components/GalleryView/GalleryView';

class OrganizationGallery extends React.Component {
    render() {
        return (
            <GalleryView
                title={'St. Valentines'}
                values={[
                    {
                        label: 'Start Date  12312 3123123  12312',
                        value: '2/1/2021'
                    },
                    {
                        label: 'End Date',
                        value: '2/1/2021'
                    },
                    {
                        label: 'Start Date',
                        value: '2/1/2021'
                    },
                    {
                        label: 'Start Date',
                        value: '2/1/2021'
                    },
                    {
                        label: 'Start Date',
                        value: '2/1/2021'
                    },
                    {
                        label: 'Start Date',
                        value: '2/1/2021'
                    },
                    {
                        label: 'Start Date',
                        value: '2/1/2021'
                    }
                ]}
            />
        );
    }
}

export default OrganizationGallery;
