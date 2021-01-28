import { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT } from "../../types";

const ProjectState = props => {
    const initialState = {
        projects: [
            { id: 1, name: 'tienda virtual' },
            { id: 2, name: 'intranet' },
            { id: 3, name: 'diseño de sitio web' }
        ],
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

    // Chcecar value luego
    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm
            }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState