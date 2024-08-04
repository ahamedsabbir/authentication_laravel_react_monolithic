// Constants
const CART_STATE = JSON.parse(localStorage.getItem('cart_data')) || [];
const ADD = 'ADD';
const REMOVE = 'REMOVE';
const FORMAT = 'FORMAT';

// Action Creators
export const addCart = (item) => ({
    type: ADD,
    payload: item
});
export const removeCart = (id) => ({
    type: REMOVE,
    payload: id
});
export const formatCart = () => ({
    type: FORMAT
});

// Reducer
export const reduxCart = (state = CART_STATE, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case REMOVE:
            return state.filter(item => item.id !== action.payload);
        case FORMAT:
            return [];
        default:
            return state;
    }
};
