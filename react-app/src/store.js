import { combineReducers, createStore, applyMiddleware } from 'redux';
import { numReducer } from './reducers/reduxCounter';
import { reduxAuth } from './reducers/reduxAuth';
import { reduxCart } from './reducers/reduxCart';
const rootReducer = combineReducers({
    authentication: reduxAuth,
    counter: numReducer,
    cart: reduxCart
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

export const updateCartStorage = store => next => action => {
    const result = next(action);
    const state = store.getState().cart;
    if (state) {
        localStorage.setItem('cart_data', JSON.stringify(state));
    } else {
        localStorage.removeItem('cart_data');
    }
    return result;
};

const store = createStore(
    rootReducer,
    applyMiddleware(updateAuthStorage, updateCartStorage)
);
export default store;