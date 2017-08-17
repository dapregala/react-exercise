import { createStore, combineReducers } from 'redux';
import usersReducer from './reducers/Users';

const reducers = combineReducers({
    "users": usersReducer
});

const store = createStore(reducers);

export default store;