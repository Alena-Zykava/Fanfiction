import { combineReducers, createStore, applyMiddleware } from 'redux';
import fanficReducer from './fanficReducer';
import messageReducer from './messageReducer';
import userReducer from './userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    fanfics: fanficReducer,
    showMessage: messageReducer,
    users: userReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
