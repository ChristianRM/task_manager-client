import { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'

const Bar = () => {
    // Extraer la información de autenticación
    const authContext = useContext(AuthContext)
    const { user, authenticatedUser, logout } = authContext

    useEffect(() => {
        authenticatedUser()
        // eslint-disable-next-line
    }, [])


    return (
        <header className="app-header">
            {user ?
                <p className="nombre-usuario">
                    Hi <span>{user.name}</span>
                </p>
                : null}

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => { logout() }}
                >Log out
                </button>
            </nav>
        </header>
    );
}

export default Bar;