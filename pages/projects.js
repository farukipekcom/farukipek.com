import Title from "../components/title/title";
import Project from "../components/project/project";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Quisque congue",
      image: "placeholder.jpg",
      category: "WEB DESIGN + UI DESIGN",
      url: "https://farukipek.com/",
    },
    {
      id: 2,
      title: "Integer feugiat metus",
      image: "placeholder.jpg",
      category: "FRONT-END DEVELOPMENT + UI DESIGN",
      url: "https://farukipek.com/",
    },
    {
      id: 3,
      title: "Sed eget libero eu tellus",
      image: "placeholder.jpg",
      category: "WEB DESIGN + UI DESIGN",
      url: "https://farukipek.com/",
    },
    {
      id: 4,
      title: "Curabitur blandit",
      image: "placeholder.jpg",
      category: "FRONT-END DEVELOPMENT + UI DESIGN",
      url: "https://farukipek.com/",
    },
  ];
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
          {projects.map((item) => {
            return (
              <>
                <Project
                  id={item.id}
                  title={item.title}
                  img={item.image}
                  category={item.category}
                  url={item.url}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
