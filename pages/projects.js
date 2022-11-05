/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Title from "../components/title/title";
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
          <a href="" class="projects-list-item">
            <div class="projects-list-item-image">
              <Image
                src="/placeholder.jpg"
                alt="Project Name"
                width={520}
                height={360}
              />
            </div>
            <h3 class="projects-list-item-title">Quisque congue</h3>
            <span class="projects-list-item-category">
              WEB DESIGN + UI DESIGN
            </span>
          </a>
          <a href="" class="projects-list-item">
            <div class="projects-list-item-image">
              <Image
                src="/placeholder.jpg"
                alt="Project Name"
                width={520}
                height={360}
              />
            </div>
            <h3 class="projects-list-item-title">Integer feugiat metus</h3>
            <span class="projects-list-item-category">
              FRONT-END DEVELOPMENT + UI DESIGN
            </span>
          </a>
          <a href="" class="projects-list-item">
            <div class="projects-list-item-image">
              <Image
                src="/placeholder.jpg"
                alt="Project Name"
                width={520}
                height={360}
              />
            </div>
            <h3 class="projects-list-item-title">Sed eget libero eu tellus</h3>
            <span class="projects-list-item-category">
              WEB DESIGN + UI DESIGN
            </span>
          </a>{" "}
          <a href="" class="projects-list-item">
            <div class="projects-list-item-image">
              <Image
                src="/placeholder.jpg"
                alt="Project Name"
                width={520}
                height={360}
              />
            </div>
            <h3 class="projects-list-item-title">Curabitur blandit</h3>
            <span class="projects-list-item-category">
              WEB DESIGN + UI DESIGN
            </span>
          </a>
          <a href="" class="projects-list-item">
            <div class="projects-list-item-image">
              <Image
                src="/placeholder.jpg"
                alt="Project Name"
                width={520}
                height={360}
              />
            </div>
            <h3 class="projects-list-item-title">Vehicula iaculis erna</h3>
            <span class="projects-list-item-category">
              FRONT-END DEVELOPMENT + UI DESIGN
            </span>
          </a>
          <a href="" class="projects-list-item">
            <div class="projects-list-item-image">
              <Image
                src="/placeholder.jpg"
                alt="Project Name"
                width={520}
                height={360}
              />
            </div>
            <h3 class="projects-list-item-title">Nisl pharetra ullamcorper</h3>
            <span class="projects-list-item-category">
              FRONT-END DEVELOPMENT + UI DESIGN
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
