import { Fragment } from "react";

const AddProject = () => {
    return (
        <Fragment>
            <button
                type="button"
                className=" btn btn-block btn-primario">
                New Proyect
            </button>
            <form className="formulario-nuevo-proyecto">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Project Name"
                    name="name"
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