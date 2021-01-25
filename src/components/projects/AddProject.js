import { Fragment, useState } from "react";


const AddProject = () => {
    // State para proyecto
    const [project, setProject] = useState({
        name: ''
    });

    // Extraer nombre de proyecto
    const { name } = project;

    // Lee contenidos del input
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault()

        // Validar el proyecto

        // Agregar al state

        // Reiniciar el form
    }

    return (
        <Fragment>
            <button
                type="button"
                className=" btn btn-block btn-primario">
                New Proyect
            </button>
            <form 
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Project Name"
                    name="name"
                    value={name}
                    onChange={onChangeProject}
                />
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Add Project"

                />
            </form>
        </Fragment>

    );
}

export default AddProject;