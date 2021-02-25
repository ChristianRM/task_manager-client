import { 
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from "../../types";

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case REGISTRATION_ERROR:
            return {
                ...state,
                token: null,
                message: action.payload
            }
        default:
            return state
    }
}