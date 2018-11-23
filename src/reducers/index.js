import { combineReducers } from 'redux';
import userReducer from './userReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
    currentUser: userReducer,
    events: eventsReducer
});

export default rootReducer;
