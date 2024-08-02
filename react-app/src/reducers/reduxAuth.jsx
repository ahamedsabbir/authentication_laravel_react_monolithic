// Constants
const AUTH_STATE = JSON.parse(localStorage.getItem('auth_data')) || {};
const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT';
const UPDATE = 'UPDATE';

// Action Creators
export const login = (data) => ({
    type: LOGIN,
    payload: { data }
});
export const logout = () => ({
    type: LOGOUT
});
export const register = (data) => ({
    type: REGISTER,
    payload: { data }
});
export const update = (data) => ({
    type: UPDATE,
    payload: { data }
});

// Reducer
export const reduxAuth = (state = AUTH_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                id: action.payload.data.id,
                user: action.payload.data.user,
                token: action.payload.data.token,
                role: action.payload.data.role,
                auth: action.payload.data.auth
            };
        case LOGOUT:
            return {
                ...state,
                id: null,
                user: null,
                token: null,
                role: null,
                auth: null,
            };
        case REGISTER:
            return {
                ...state,
                id: action.payload.data.id,
                user: action.payload.data.user,
                token: action.payload.data.token,
                role: action.payload.data.role,
                auth: action.payload.data.auth
            };
        case UPDATE:
            return {
                ...state,
                id: action.payload.data.id,
                user: action.payload.data.user,
                token: action.payload.data.token,
                role: action.payload.data.role,
                auth: action.payload.data.auth
            };
        default:
            return state;
    }
};
