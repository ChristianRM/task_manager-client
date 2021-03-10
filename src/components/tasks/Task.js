import { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {
    // Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext)
    const { selectedProject } = projectsContext;

    // Obtener la funcion del context de tareas
    const tasksContext = useContext(taskContext)
    const { deleteTask, getTasks, toggleTaskStatus, setSelectedTask } = tasksContext;

    // Extraer el proyecto
    const [project] = selectedProject

    // Funcion que se ejecuta cuando el usuario presiona el boton de eliminar tarea
    const taskDelete = id => {
        deleteTask(id, project._id)
        getTasks(project.id)
    }

    // Funcion que cambia el status de la tarea
    const toggleStatus = status => {
        if (task.status) { task.status = false }
        else { task.status = true }
        toggleTaskStatus(task)
    }

    // Agrega una tarea actual cuando el usuario desea editarla
    const selectTask = task => {
        setSelectedTask(task)
    }

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {
                    task.status ?
                        (
                            <button
                                type="button"
                                className="completo"
                                onClick={() => toggleStatus(task)}
                            >Completo</button>
                        )
                        :
                        (
                            <button
                                type="button"
                                className="incompleto"
                                onClick={() => toggleStatus(task)}
                            >Incompleto</button>
                        )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selectTask(task)}
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => taskDelete(task._id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Task;