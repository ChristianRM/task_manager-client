const Login = () => {
    const onChange = () => {

    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Login</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
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
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                        type="submit" 
                        className="btn btn-primario btn-block" 
                        value="Login"/>
                    </div>
                </form>
            </div>
        </div>
        );
}
 
export default Login;