import React from 'react';
import { observer, inject } from 'mobx-react';

class App extends React.Component {
    render() {
        const { airtable } = this.props.store;
        console.log(airtable);

        return <div className="App"></div>;
    }
}

export default inject('store')(observer(App));
