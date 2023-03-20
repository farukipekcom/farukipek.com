import Title from "../components/title/title";
import Project from "../components/project/project";
import styles from "./projects.module.scss";
import Page from "../components/page/page";
import projects from "./api/projects.json";
const Projects = () => {
  return (
    <Page
      title="Projects - Faruk Ipek"
      desc="I'm Faruk Ipek, a freelancer front-end developer from Charlotte USA. Check out my projects. Send me a message and talk about the new project."
    >
      <Title
        pagetitle={"Projects"}
        title={
          "Check out my projects. Send me a message and talk about the new project."
        }
        details={
          "Check out my professional portfolio. I work remotely and work on freelance projects."
        }
      />
      <div className={styles.list}>
        {projects.map((item, id) => {
          return (
            <div key={id} className={styles.item}>
              <Project item={item} />
            </div>
          );
        })}
      </div>
    </Page>
  );
};
export default Projects;
