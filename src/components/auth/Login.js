import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
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
            [e.target.name] : e.target.value
        })
    }

    //Login
    const onSubmit = e => {
        e.preventDefault()
        // Validar que no haya campos vacios
        // Pasarlo al action
    }

    return (
        <div className="form-usuario">
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
                <Link to={'/register'} className="enlace-cuenta">Crear una cuenta</Link>
            </div>
        </div>
    );
}

export default Login;