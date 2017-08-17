import { handleActions } from 'redux-actions';
import { userList as initialState} from '../data/generated';
import { getUserList } from "../actions/User";

export default handleActions({
    [getUserList]: (state, action) => ({
        state
    })
}, initialState)