import { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_VALIDATION,
    SELECTED_PROJECT,
    DELETE_PROJECT
} from '../../types';

import clientAxios from '../../config/axios'



const ProjectState = props => {
    const projects = [
        { id: 1, name: 'tienda virtual' },
        { id: 2, name: 'intranet' },
        { id: 3, name: 'diseño de sitio web' }
    ]

    const initialState = {
        projects: [],
        form: false,
        formError: false,
        selectedProject: null
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
    const addProject = async project => {
        try {
            const result = await clientAxios.post('/api/projects', project)
            // Insertar el proyecto en el state
            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Valida el formulario por errores
    const showError = () => {
        dispatch({
            type: FORM_VALIDATION
        })
    }

    // Selecciona el proyecto que el usuario dio click
    const selectProject = projectId => {
        dispatch({
            type: SELECTED_PROJECT,
            payload: projectId
        })
    }

    // Elimina el proyecto que el usuario dio click
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    // Chcecar value luego
    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formError: state.formError,
                selectedProject: state.selectedProject,
                showForm,
                getProjects,
                addProject,
                showError,
                selectProject,
                deleteProject
            }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState