import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
    // State para iniciar sesion
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: '',
        confirm:''
    });

    // Extraer usuario
    const { name, email, password, confirm } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //Register
    const onSubmit = e => {
        e.preventDefault()
        // Validar que no haya campos vacios
        // Password debe ser mayor a 6 caracteres
        // El password debe coincidir en ambos campos
        // Pasarlo al action
    }

    return (
        <div className="form-usuario">
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
                            name="password"
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