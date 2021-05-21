import AddProject from '../projects/AddProject';
import ListProjects from '../projects/ListProjects';

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <AddProject />
            <div className="proyectos">
                <h2>
                    Your projects
                </h2>
                <ListProjects />
            </div>
        </aside>
    );
}

export default Sidebar;