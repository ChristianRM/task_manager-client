import { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const ListTasks = () => {
    // Extraer proyects de state inicial
    const projectsContext = useContext(projectContext)
    const { selectedProject, deleteProject } = projectsContext;

    // Si no hay proyecto seleccionado
    if(!selectedProject) return <h2>Select a project</h2>

    // Array destructuring para extraer el proyecto actual
    const [actualProject] = selectedProject;

    const tasksProject = [];
    
    // Elimina un proyecto
    const onClickDelete = () => {
        deleteProject(actualProject.id)
    }
    return (
        <Fragment>
            <h2>
                Project: {actualProject.name}
            </h2>
            <ul className="listado-tareas">
                {tasksProject.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tasksProject.map(task => (<Task task={task} />))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickDelete}>
                Delete project &times;
            </button>
        </Fragment>

    );
}

export default ListTasks;