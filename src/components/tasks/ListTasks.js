import { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListTasks = () => {
    // Extraer proyects de state inicial
    const projectsContext = useContext(projectContext)
    const { selectedProject, deleteProject } = projectsContext;

    // Obtener las tareas del proyecto
    const tasksContext = useContext(taskContext)
    const { tasksProject } = tasksContext;

    // Si no hay proyecto seleccionado
    if (!selectedProject) return <h2>Select a project</h2>

    // Array destructuring para extraer el proyecto actual
    const [actualProject] = selectedProject;

    // Elimina un proyecto
    const onClickDelete = () => {
        deleteProject(actualProject._id)
    }
    return (
        <Fragment>
            <h2>
                Project: {actualProject.name}
            </h2>
            <ul className="listado-tareas">
                {tasksProject.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                        {
                            tasksProject.map(task => (
                                <CSSTransition
                                    key={task.id}
                                    timeout={200}
                                    classNames="tarea"
                                >
                                    <Task task={task} />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
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