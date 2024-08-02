import { combineReducers, createStore, applyMiddleware } from 'redux';
import { numReducer } from './reducers/reduxCounter';
import { reduxAuth } from './reducers/reduxAuth';
const rootReducer = combineReducers({
    authentication: reduxAuth,
    counter: numReducer
});

export const updateAuthStorage = store => next => action => {
    const result = next(action);
    const state = store.getState().authentication;
    if (state) {
        localStorage.setItem('auth_data', JSON.stringify(state));
    } else {
        localStorage.removeItem('auth_data');
    }
    return result;
};

const store = createStore(
    rootReducer,
    applyMiddleware(updateAuthStorage)
);
export default store;