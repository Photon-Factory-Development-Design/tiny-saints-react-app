import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'mobx-react';
import OrganizationForm from 'containers/OrganizationForm/OrganizationForm';
import FundraiserToolkit from 'containers/FundraiserToolkit/FundraiserToolkit';
import OrganizationDropDown from 'containers/OrganziationDropDown/OrganizationDropDown';
import OrgOrdersList from 'containers/OrgOrdersList/OrgOrdersList';

// window.email = 'chris@photonfactorydev.com';
if (document.getElementById('organizations-table')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App type="organizations" />
            </Provider>
        </React.StrictMode>,
        document.getElementById('organizations-table')
    );
}
if (document.getElementById('orders-table')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App type="orders" />
            </Provider>
        </React.StrictMode>,
        document.getElementById('orders-table')
    );
}
if (document.getElementById('organization-form')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <OrganizationForm type="orders" />
            </Provider>
        </React.StrictMode>,
        document.getElementById('organization-form')
    );
}
if (document.getElementById('organizations-dropdown')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <OrganizationDropDown />
            </Provider>
        </React.StrictMode>,
        document.getElementById('organizations-dropdown')
    );
}
if (document.getElementById('org-orders-list')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <OrgOrdersList />
            </Provider>
        </React.StrictMode>,
        document.getElementById('org-orders-list')
    );
}
if (document.getElementById('fundraiser-toolkit')) {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <FundraiserToolkit />
            </Provider>
        </React.StrictMode>,
        document.getElementById('fundraiser-toolkit')
    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
