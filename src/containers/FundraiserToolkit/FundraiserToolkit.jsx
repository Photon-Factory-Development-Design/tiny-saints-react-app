import './fundraiserToolkit.css';

import React from 'react';
import { inject, observer } from 'mobx-react';
import { reaction } from 'mobx';

class FundraiserToolkit extends React.PureComponent {
    fetchFundraiserInfo() {
        const { airtable } = this.props.store;
        // let's assume that org info will be fetched
        reaction(() => [airtable.organization], (organization) => {
            // fetch orders info for organization
        })
    }

    componentDidMount() {
        this.fetchFundraiserInfo();
    }

    render() {
        return <React.Fragment></React.Fragment>;
    }
}

export default inject('store')(observer(FundraiserToolkit));
