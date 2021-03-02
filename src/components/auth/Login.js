import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext'

const Login = (props) => {
    // Extraer valores del context
    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    const authContext = useContext(AuthContext)
    const { message, authenticated, login } = authContext

    // En caso de que el usuario no exista o el password este equivocado
    useEffect(() => {
        if (authenticated) {
            props.history.push('/projects')
        }

        if (message) {
            showAlert(message.msg, message.category)
        }

    }, [message, authenticated, props.history])


    // State para iniciar sesion
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // Extraer usuario
    const { email, password } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //Login
    const onSubmit = e => {
        e.preventDefault()
        // Validar que no haya campos vacios
        if (email.trim() === '' || password.trim() === '') {
            showAlert('All fields are required', 'alerta-error')
        }
        // Pasarlo al action
        login({ email, password })
    }

    return (
        <div className="form-usuario">
            { alert ? (<div className={`alerta ${alert.category}`}> {alert.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Login" />
                    </div>
                </form>
                <Link to={'/register'} className="enlace-cuenta">Create an account</Link>
            </div>
        </div>
    );
}

export default Login;