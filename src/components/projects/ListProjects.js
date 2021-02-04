import Project from "./Project";
import { useContext, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListProjects = () => {
    // Extraer proyects de state inicial
    const projectsContext = useContext(projectContext)
    const { projects, getProjects } = projectsContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        getProjects()
    }, [])

    // Revisar que projects no este vacio 
    if (projects.length === 0) return <p>No projects created</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
            {projects.map(project => (
                <CSSTransition
                key={project.id}
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