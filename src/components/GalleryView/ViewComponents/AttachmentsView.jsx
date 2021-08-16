import React from 'react';

class AttachmentsView extends React.Component {
    render() {
        const { value } = this.props;
        if (!value || value.length === 0) {
            return <React.Fragment></React.Fragment>;
        }
        return <img src={value[0].thumbnails.small.url} alt="attachment" />;
    }
}

export default AttachmentsView;
