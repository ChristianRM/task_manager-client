import { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {
    // Obtener el state del formulario
    const projectsContext = useContext(projectContext)
    const { selectProject } = projectsContext;

    // Obtener la funcion del context de tareas
    const tasksContext = useContext(taskContext)
    const { getTasks } = tasksContext;

    // Funcion para agregar el proyecto actual
    const pickProject = id => {
        selectProject(id)
        getTasks(id)
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => pickProject(project.id)}
            >  {project.name}
            </button>
        </li>
    );
}

export default Project;