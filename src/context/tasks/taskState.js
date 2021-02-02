import { useReducer } from "react";
import TaskContext  from './taskContext';
import TaskReducer from "./taskReducer";

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
        ]    
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState)
    
    return (
        <TaskContext.Provider
        value={
            {tasks: state.tasks}
        }>
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;