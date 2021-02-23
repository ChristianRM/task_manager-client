import { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import {
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from "../../types";


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        msg: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Las funciones


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;