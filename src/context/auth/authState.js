import { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clientAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

import {
    REGISTRATION_SUCCESSFUL,
    REGISTRATION_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOG_OUT
} from '../../types';


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Las funciones
    const registerUser = async data => {
        try {
            const response = await clientAxios.post('/api/users', data)
            dispatch({
                type: REGISTRATION_SUCCESSFUL,
                payload: response.data
            })

            // Obtener usuario
            authenticatedUser()
        } catch (error) {
            // console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: REGISTRATION_ERROR,
                payload: alert
            })
        }
    }

    // Retorna el usuario autenticado
    const authenticatedUser = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            tokenAuth(token)
        }

        try {
            const response = await clientAxios.get('/api/auth')
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Cuando el usuario inicia sesión
    const login = async data => {
        try {
            const response = await clientAxios.post('/api/auth', data)
            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            })

            // Obtener usuario
            authenticatedUser()

        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser,
                login,
                authenticatedUser
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;