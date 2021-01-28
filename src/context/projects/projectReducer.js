import { 
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_VALIDATION
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                formError: false
            }
        case FORM_VALIDATION:
            return{
                ...state,
                formError:true
            }
        default:
            return state;
    }
}