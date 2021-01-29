import { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {
    // Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext)
    const { selectedProject } = projectsContext;

    // Si no hay proyecto seleccionado
    if(!selectedProject) return null

    // Array destructuring para extraer el proyecto actual
    const [actualProject] = selectedProject;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre de tarea"
                    name="name"
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
        </div>

    );
}

export default FormTask;