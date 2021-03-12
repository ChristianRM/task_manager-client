import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext'

const Register = (props) => {
    // Extraer valores del context
    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    const authContext = useContext(AuthContext)
    const { message, authenticated, registerUser } = authContext

    // En caso de que el usuario se haya autenticado, registrado o sea un registro duplicado
    useEffect(() => {
        if (authenticated) {
            props.history.push('/projects')
        }
        console.log('message')
        console.log(message)
        if (message) {
            showAlert(message.msg, message.category)
        }
        // eslint-disable-next-line
    }, [message, authenticated, props.history])

    // State para iniciar sesion
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    // Extraer usuario
    const { name, email, password, confirm } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    //Register
    const onSubmit = e => {
        e.preventDefault()
        // Validar que no haya campos vacios
        if (
            name.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirm.trim() === ''
        ) {
            showAlert('All fields are needed', 'alerta-error')
            return
        }

        // Password debe ser mayor a 6 caracteres
        if (password.length < 6) {
            showAlert('Password must be at least 6 characters long', 'alerta-error')
            return
        }

        // El password debe coincidir en ambos campos
        if (password !== confirm) {
            showAlert('Passwords don\'t match', 'alerta-error')
            return
        }

        // Pasarlo al action
        registerUser({
            name, email, password
        })
    }

    return (
        <div className="form-usuario">
            { alert ? (<div className={`alerta ${alert.category}`}> {alert.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Register</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Re-type your password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Register" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">I already have an account</Link>
            </div>
        </div>
    );
}

export default Register;