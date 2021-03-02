import { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { v4 as uuid } from 'uuid';

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

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 0, name: 'Choose platform', status: true, projectId: 1 },
            { id: 1, name: 'Choose colors', status: true, projectId: 2 },
            { id: 2, name: 'Choose payment', status: false, projectId: 3 },
            { id: 3, name: 'Choose hosting', status: false, projectId: 4 },
            { id: 4, name: 'Choose platform', status: true, projectId: 2 },
            { id: 5, name: 'Choose colors', status: true, projectId: 3 },
            { id: 6, name: 'Choose payment', status: false, projectId: 3 },
            { id: 7, name: 'Choose hosting', status: false, projectId: 4 },
            { id: 8, name: 'Choose platform', status: true, projectId: 2 },
            { id: 9, name: 'Choose colors', status: true, projectId: 1 },
            { id: 10, name: 'Choose payment', status: false, projectId: 1 },
            { id: 11, name: 'Choose hosting', status: false, projectId: 2 },
        ],
        tasksProject: null,
        errorTask: false,
        selectedTask: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState)

    // Crear las funciones

    // Obtenet las tareas de un proyecto
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    // Agregar tarea al proyecto seleccionado
    const addTask = task => {
        task.id = uuid()
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    // Valida y muestra un error en caso que sea necesario
    const taskValidation = () => {
        dispatch({
            type: TASK_VALIDATION
        })
    }

    // Eliminar tarea por id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    // Cambia el status de la tarea
    const toggleTaskStatus = task => {
        dispatch({
            type: TASK_STATUS,
            payload: task
        })
    }

    // Extrae una tarea para edicion
    const setSelectedTask = task => {
        dispatch({
            type: SELECTED_TASK,
            payload: task
        })
    }

    // Edita una tarea
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
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
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                taskValidation,
                deleteTask,
                toggleTaskStatus,
                setSelectedTask,
                updateTask,
                deselectTask
            }}>
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;