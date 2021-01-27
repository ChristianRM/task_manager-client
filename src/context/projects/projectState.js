import { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = props => {
    const initialState = {
        form: true
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState)

    // Serie de funciones para el CRUD
    // Chcecar value luego
    return (
        <projectContext.Provider
            value={{ form: state.form }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState