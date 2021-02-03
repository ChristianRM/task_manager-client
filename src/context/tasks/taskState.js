import { useReducer } from "react";
import TaskContext  from './taskContext';
import TaskReducer from "./taskReducer";

import { 
    TASKS_PROJECT,
    ADD_TASK,
    TASK_VALIDATION
 } from "../../types";

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Choose platform', status: true, projectId: 1 },
            { name: 'Choose colors', status: true, projectId: 2 },
            { name: 'Choose payment', status: false, projectId: 3 },
            { name: 'Choose hosting', status: false,projectId: 4 },
            { name: 'Choose platform', status: true, projectId: 2 },
            { name: 'Choose colors', status: true, projectId: 3 },
            { name: 'Choose payment', status: false, projectId: 3 },
            { name: 'Choose hosting', status: false,projectId: 4 },
            { name: 'Choose platform', status: true, projectId: 2 },
            { name: 'Choose colors', status: true, projectId: 1 },
            { name: 'Choose payment', status: false, projectId: 1 },
            { name: 'Choose hosting', status: false,projectId: 2 },
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

    return (
        <TaskContext.Provider
        value={{
            tasks: state.tasks,
            tasksProject: state.tasksProject,
            errorTask: state.errorTask,
            getTasks,
            addTask,
            taskValidation
        }}>
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;