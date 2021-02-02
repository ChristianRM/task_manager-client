import { useReducer } from "react";
import TaskContext  from './taskContext';
import TaskReducer from "./taskReducer";

import { 
    TASKS_PROJECT
 } from "../../types";

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Choose platform', state: true, projectId: 1 },
            { name: 'Choose colors', state: true, projectId: 2 },
            { name: 'Choose payment', state: false, projectId: 3 },
            { name: 'Choose hosting', state: false,projectId: 4 },
            { name: 'Choose platform', state: true, projectId: 2 },
            { name: 'Choose colors', state: true, projectId: 3 },
            { name: 'Choose payment', state: false, projectId: 3 },
            { name: 'Choose hosting', state: false,projectId: 4 },
            { name: 'Choose platform', state: true, projectId: 2 },
            { name: 'Choose colors', state: true, projectId: 1 },
            { name: 'Choose payment', state: false, projectId: 1 },
            { name: 'Choose hosting', state: false,projectId: 2 },
        ],
        tasksProject: null    
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
    return (
        <TaskContext.Provider
        value={{
            tasks: state.tasks,
            tasksProject: state.tasksProject,
            getTasks
        }}>
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;