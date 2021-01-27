import { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
    const tasksProject = [
        { name: 'Choose platform', state: true },
        { name: 'Choose colors', state: true },
        { name: 'Choose payment', state: false },
        { name: 'Choose hosting', state: false }
    ]
    return (
        <Fragment>
            <h2>
                Project: Tienda virtual
            </h2>
            <ul className="listado-tareas">
                {tasksProject.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tasksProject.map(task => (<Task task={task} />))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar">
                Delete project &times;
            </button>
        </Fragment>

    );
}

export default ListTasks;