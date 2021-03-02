import { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const AddProject = () => {

    // Obtenerr el state del formulario
    const projectsContext = useContext(projectContext)
    const { form, formError, showForm, addProject, showError } = projectsContext;

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
        if (name === '') {
            showError()
            return;
        }
        // Agregar al state
        addProject(project)
        // Reiniciar el form
        setProject({
            name: ''
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className=" btn btn-block btn-primario"
                onClick={() => showForm()}
            >
                New Proyect
            </button>
            {
                form ?
                    (
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
                    )
                    : null
            }
            {formError ? <p className="mensaje error">Project name is needed</p> : null}
        </Fragment>

    );
}

export default AddProject;