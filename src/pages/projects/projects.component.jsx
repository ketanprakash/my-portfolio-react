import "./projects.styles.scss"
import projectList from "./projects.data";
import Project from "../../components/project/project.component";

const Projects = () => (
  <div className="projects">
    <h1 className="title">My Projects</h1>
    <div className="project-container">
      {projectList.map((project) => <Project key={project.id} {...project}/>)}
    </div>
  </div>
)

export default Projects;