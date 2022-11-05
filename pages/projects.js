import Title from "../components/title/title";
import Project from '../components/project/project'
const Projects = () => {
  return (
    <div class="projects">
      <div class="container">
        <Title
          pagetitle={"Projects"}
          title={
            "Check out my projects. Send me a message and talk about the new project."
          }
          details={
            "Check out my professional portfolio. I work remotely and work on freelance projects."
          }
        />
        <div class="projects-list">
          <Project title={"Quisque congue"} img={"placeholder.jpg"} category={"WEB DESIGN + UI DESIGN"} />
          <Project title={"Integer feugiat metus"} img={"placeholder.jpg"} category={"FRONT-END DEVELOPMENT + UI DESIGN"} />
          <Project title={"Sed eget libero eu tellus"} img={"placeholder.jpg"} category={"WEB DESIGN + UI DESIGN"} />
          <Project title={"Curabitur blandit"} img={"placeholder.jpg"} category={"WEB DESIGN + UI DESIGN"} />
          <Project title={"Vehicula iaculis erna"} img={"placeholder.jpg"} category={"FRONT-END DEVELOPMENT + UI DESIGN"} />
          <Project title={"Nisl pharetra ullamcorper"} img={"placeholder.jpg"} category={"FRONT-END DEVELOPMENT + UI DESIGN"} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
