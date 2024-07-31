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
        localStorage.setItem('user', state.user);
        localStorage.setItem('token', state.token);
        localStorage.setItem('role', state.role);
        localStorage.setItem('auth', state.auth);
    } else {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('auth');
    }
    return result;
};

const store = createStore(
    rootReducer,
    applyMiddleware(updateAuthStorage)
);
export default store;