import AddProject from "../projects/AddProject";
const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <AddProject/>
            <div className="proyectos">
                <h2>
                    Tus proyectos
                </h2>
            </div>
        </aside>
    );
}

export default Sidebar;