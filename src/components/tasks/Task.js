import { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
    // Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext)
    const { selectedProject } = projectsContext;

    // Obtener la funcion del context de tareas
    const tasksContext = useContext(taskContext)
    const { deleteTask, getTasks } = tasksContext;

    // Extraer el proyecto
    const [project] = selectedProject

    // Funcion que se ejecuta cuando el usuario presiona el boton de eliminar tarea
    const taskDelete = id => {
        deleteTask(id)
        getTasks(project.id)
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
                            >Completo</button>
                        )
                        :
                        (
                            <button
                                type="button"
                                className="incompleto"
                            >Incompleto</button>
                        )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=> taskDelete(task.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Task;