import {
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
        case REGISTRATION_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case LOGIN_ERROR:
        case REGISTRATION_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                message: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}