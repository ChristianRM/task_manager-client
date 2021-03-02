import { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'

const Bar = () => {
    // Extraer la información de autenticación
    const authContext = useContext(AuthContext)
    const { user, authenticatedUser } = authContext

    useEffect(() => {
        authenticatedUser()
    })


    return (
        <header className="app-header">
            {user ?
                <p className="nombre-usuario">
                    Hi <span>{user.name}</span>
                </p>
                : null}

            <nav className="nav-principal">
                <a href="#!">Log out</a>
            </nav>
        </header>
    );
}

export default Bar;