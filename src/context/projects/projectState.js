import { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { 
    FORM_PROJECT,
    GET_PROJECTS
} from "../../types";



const ProjectState = props => {
    const projects = [
        { id: 1, name: 'tienda virtual' },
        { id: 2, name: 'intranet' },
        { id: 3, name: 'diseño de sitio web' }
    ]

    const initialState = {
        projects:  [],
        form: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState)

    // Serie de funciones para el CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    // Obtener los proyectos
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    // Chcecar value luego
    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects
            }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState