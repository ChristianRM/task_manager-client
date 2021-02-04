import {
    ADD_TASK,
    DELETE_TASK,
    TASKS_PROJECT,
    TASK_STATUS,
    TASK_VALIDATION
} from "../../types";

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
                tasks: state.tasksProject.map(task => task.id === action.payload.id ? action.payload.id : task)
            }
        default:
            return state;
    }
}