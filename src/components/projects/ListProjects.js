import Project from './Project';
import { useContext, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListProjects = () => {
    // Extraer proyects de state inicial
    const projectsContext = useContext(projectContext)
    const { message, projects, getProjects } = projectsContext;

    const alertContext = useContext(AlertContext)
    const { alert, showAlert } = alertContext

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        if (message)
            showAlert(message.msg, message.category)

        getProjects()
        // eslint-disable-next-line
    }, [message])

    // Revisar que projects no este vacio 
    if (projects.length === 0) return <p>No projects created</p>;

    return (
        <ul className="listado-proyectos">
            {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="proyecto">
                        <Project project={project} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListProjects;