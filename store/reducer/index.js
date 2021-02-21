import { combineReducers } from 'redux';
import authUser from './authUser';
import app_reducer from './app_reducer';




export default rootReducer = combineReducers({
    authUser: authUser,
    app: app_reducer,
})