import { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {
    // Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext)
    const { selectedProject } = projectsContext;

    // Obtener la funcion del context de tareas
    const tasksContext = useContext(taskContext)
    const { selectedTask, errorTask, addTask, taskValidation, getTasks, updateTask, deselectTask } = tasksContext;

    // Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (selectedTask !== null) {
            setTask(selectedTask)
        } else {
            setTask({
                name: ''
            })
        }
    }, [selectedTask])

    // State del formulario
    const [task, setTask] = useState({
        name: ''
    })

    // Extrare nombre del proyecto
    const { name } = task

    // Si no hay proyecto seleccionado
    if (!selectedProject) return null

    // Array destructuring para extraer el proyecto actual
    const [actualProject] = selectedProject;

    // Leer valores del form
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar
        if (name.trim() === '') {
            taskValidation()
            return
        }

        // Revisar si es edicion o es nueva tarea
        if (selectedTask === null) {
            // Agregar la nueva tarea al state de tareas
            task.project = actualProject._id;
            addTask(task)
        } else {
            // Actualizar tarea existente
            updateTask(task)
            // Elimina la seleccion de tarea
            deselectTask()
        }

        // Pasar validacion


        // Obtener y filtrar tareas del proyecto actual
        getTasks(actualProject.id)

        // Reiniciar el form
        setTask({
            name: ''
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de tarea"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    ></input>
                </div>
                <div>
                    <input
                        type="submit"
                        className="btn btn-block btn-submit btn-primario"
                        value={selectedTask ? 'Edit Task' : 'Add Task'}
                    >
                    </input>
                </div>
            </form>
            {errorTask ? <p className="mensaje error">Task name should not be empty</p> : null}
        </div>

    );
}

export default FormTask;