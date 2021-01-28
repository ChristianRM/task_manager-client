import { useReducer } from "react";
import { v4 as uuid } from 'uuid';import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { 
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT
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

    // Agregar nuevo proyecto
    const addProject = project => {
        project.id = uuid();
        // Insertar proyecto con dispatch
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    // Chcecar value luego
    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects,
                addProject
            }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState