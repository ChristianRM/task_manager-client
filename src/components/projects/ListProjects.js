import Project from "./Project";
import { useContext, useEffect } from "react";
import Projects from "./Projects";
import projectContext from "../../context/projects/projectContext";

const ListProjects = () => {
    // Extraer proyects de state inicial
    const projectsContext = useContext(projectContext)
    const { projects, getProjects } = projectsContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
    }, [])

    // Revisar que projects no este vacio 
    if(projects.lenght === 0 ) return null;

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project key={project.id} project={project } />
            ))} 
        </ul>
     );
}
 
export default ListProjects;