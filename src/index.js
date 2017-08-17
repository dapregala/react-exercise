
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import store from './Store';
import App from './containers/App'
import UsersContainer from './containers/User'
import './index.css';

const Root = () => {
    // Redux provider
    // Intl provider
    // Navigation
    return (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route exact path="/" component={App}>
                    <IndexRoute component={UsersContainer}/>
                    <Route path="/user" component={UsersContainer}/>
                </Route>
            </Router>
        </Provider>

    )
}

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);