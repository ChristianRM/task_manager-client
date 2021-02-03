import { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
    // Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext)
    const { selectedProject } = projectsContext;

    // Obtener la funcion del context de tareas
    const tasksContext = useContext(taskContext)
    const { errorTask, addTask, taskValidation, getTasks } = tasksContext;

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
        if(name.trim()=== ''){
            taskValidation()
            return
        }

        // Pasar validacion

        // Agregar la nueva tarea al state de tareas
        task.projectId = actualProject.id;
        task.status = false
        addTask(task)

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
                        value="Add Task"
                    >
                    </input>
                </div>
            </form>
            {errorTask? <p className="mensaje error">Task name should not be empty</p>: null}
        </div>

    );
}

export default FormTask;