
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './Store';
import App from './containers/App'
import UsersContainer from './containers/User';
import TagsContainer from './containers/Tag';
import RetentionContainer from './containers/Retention';
import './index.css';

const Root = () => {
    // Redux provider
    // Intl provider
    // Navigation
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route exact path="/" component={App}>
                        <IndexRoute component={UsersContainer}/>
                        <Route path="/user" component={UsersContainer}/>
                        <Route path="/tags" component={TagsContainer}/>
                        <Route path="/retention" component={RetentionContainer}/>
                    </Route>
                </Router>
            </Provider>
        </MuiThemeProvider>
    )
}

ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);