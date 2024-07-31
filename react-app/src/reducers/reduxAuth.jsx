// Constants
const AUTH_STATE = {
    user: localStorage.getItem('user') || null,
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null,
    auth: localStorage.getItem('auth') || false
};

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const LOGOUT = 'LOGOUT';
const UPDATE = 'UPDATE';

// Action Creators
export const login = (user, token) => ({
    type: LOGIN,
    payload: { user, token }
});

export const logout = () => ({
    type: LOGOUT
});

export const update = (user) => ({
    type: UPDATE,
    payload: user
});

// Reducer
export const reduxAuth = (state = AUTH_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
                auth: action.payload.auth
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                role: null,
                auth: null,
            };
        case UPDATE:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
                auth: action.payload.auth
            };
        default:
            return state;
    }
};
