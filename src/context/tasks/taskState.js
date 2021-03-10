import { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import {
    TASKS_PROJECT,
    ADD_TASK,
    TASK_VALIDATION,
    DELETE_TASK,
    TASK_STATUS,
    SELECTED_TASK,
    UPDATE_TASK,
    DESELECT_TASK
} from '../../types';

import clientAxios from '../../config/axios'

const TaskState = props => {
    const initialState = {
        tasksProject: [],
        errorTask: false,
        selectedTask: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState)

    // Crear las funciones

    // Obtenet las tareas de un proyecto
    const getTasks = async project => {
        try {
            const result = await clientAxios.get('/api/tasks', { params: { project } })
            console.log(result)
            dispatch({
                type: TASKS_PROJECT,
                payload: result.data.tasks
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Agregar tarea al proyecto seleccionado
    const addTask = async task => {
        try {
            const result = await clientAxios.post('/api/tasks', task)
            console.log(result)
            dispatch({
                type: ADD_TASK,
                payload: task
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Valida y muestra un error en caso que sea necesario
    const taskValidation = () => {
        dispatch({
            type: TASK_VALIDATION
        })
    }

    // Eliminar tarea por id
    const deleteTask = async (id, project) => {
        try {
            await clientAxios.delete(`/api/tasks/${id}`, { params: { project } })
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Edita una tarea
    const updateTask = async task => {
        try {
            const result = await clientAxios.put(`/api/tasks/${task._id}`, task)
            dispatch({
                type: UPDATE_TASK,
                payload: result.data.task
            })
        } catch (error) {
            console.log(error)
        }
    }
    // Extrae una tarea para edicion
    const setSelectedTask = task => {
        dispatch({
            type: SELECTED_TASK,
            payload: task
        })
    }


    // Elimina la seleccion de tarea
    const deselectTask = () => {
        dispatch({
            type: DESELECT_TASK
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                taskValidation,
                deleteTask,
                setSelectedTask,
                updateTask,
                deselectTask
            }}>
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;