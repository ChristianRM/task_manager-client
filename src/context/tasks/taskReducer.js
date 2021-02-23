import {
    ADD_TASK,
    DELETE_TASK,
    DESELECT_TASK,
    SELECTED_TASK,
    TASKS_PROJECT,
    TASK_STATUS,
    TASK_VALIDATION,
    UPDATE_TASK
} from "../../types";

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksProject: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                errorTask: false
            }
        case TASK_VALIDATION:
            return {
                ...state,
                errorTask: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case TASK_STATUS:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        case SELECTED_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        case DESELECT_TASK:
            return {
                ...state,
                selectedTask: null
            }
        default:
            return state;
    }
}