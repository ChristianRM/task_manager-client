const FormTask = () => {
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