import { combineReducers, createStore, applyMiddleware } from 'redux';
import fanficReducer from './fanficReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    fanfics: fanficReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
