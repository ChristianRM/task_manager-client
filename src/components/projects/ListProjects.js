import Project from "./Project";
import { useContext, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";

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
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </ul>
    );
}

export default ListProjects;