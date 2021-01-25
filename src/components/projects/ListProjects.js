import Project from "./Project";
import Projects from "./Projects";
const ListProjects = () => {

    const projects = [
        {name: 'tienda virtual'},
        {name: 'intranet'},
        {name: 'diseño de sitio web'}
    ]

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project project={project } />
            ))} 
        </ul>
     );
}
 
export default ListProjects;