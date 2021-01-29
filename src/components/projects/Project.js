import { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
    // Obtenerr el state del formulario
    const projectsContext = useContext(projectContext)
    const { selectProject } = projectsContext;

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProject(project.id)}
            >  {project.name}
            </button>
        </li>
    );
}

export default Project;