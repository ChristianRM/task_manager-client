import { 
    ADD_TASK,
    TASKS_PROJECT,
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
                tasks: [...state.tasks, action.payload],
                errorTask: false
            }
        case TASK_VALIDATION:
            return {
                ...state,
                errorTask: true
            }
        default:
            return state;
    }
}