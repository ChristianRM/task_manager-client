import { useReducer } from "react";
import TaskContext  from './taskContext';
import TaskReducer from "./taskReducer";

import { 
    TASKS_PROJECT,
    ADD_TASK,
    TASK_VALIDATION,
    DELETE_TASK
 } from "../../types";

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 0, name: 'Choose platform', status: true, projectId: 1 },
            { id: 1, name: 'Choose colors', status: true, projectId: 2 },
            { id: 2, name: 'Choose payment', status: false, projectId: 3 },
            { id: 3, name: 'Choose hosting', status: false,projectId: 4 },
            { id: 4, name: 'Choose platform', status: true, projectId: 2 },
            { id: 5, name: 'Choose colors', status: true, projectId: 3 },
            { id: 6, name: 'Choose payment', status: false, projectId: 3 },
            { id: 7, name: 'Choose hosting', status: false,projectId: 4 },
            { id: 8, name: 'Choose platform', status: true, projectId: 2 },
            { id: 9, name: 'Choose colors', status: true, projectId: 1 },
            { id: 10, name: 'Choose payment', status: false, projectId: 1 },
            { id: 11, name: 'Choose hosting', status: false,projectId: 2 },
        ],
        tasksProject: null,
        errorTask: false
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState)
    
    // Crear las funciones

    // Obtenet las tareas de un proyecto
    const  getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    // Agregar tarea al proyecto seleccionado
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    // Valida y muestra un error en caso que sea necesario
    const taskValidation = () => {
        dispatch({
            type: TASK_VALIDATION
        })
    }

    // Eliminar tarea por id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }
    return (
        <TaskContext.Provider
        value={{
            tasks: state.tasks,
            tasksProject: state.tasksProject,
            errorTask: state.errorTask,
            getTasks,
            addTask,
            taskValidation,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;