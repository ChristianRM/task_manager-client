import {
    ADD_TASK,
    DELETE_TASK,
    DESELECT_TASK,
    SELECTED_TASK,
    TASKS_PROJECT,
    TASK_VALIDATION,
    UPDATE_TASK
} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksProject: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasksProject: [action.payload, ...state.tasksProject],
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
                tasksProject: state.tasksProject.filter(task => task._id !== action.payload)
            }
        case SELECTED_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasksProject: state.tasksProject.map(task => task._id === action.payload._id ? action.payload : task)
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