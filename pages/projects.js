import Title from "../components/title/title";
import Project from "../components/project/project";
import styles from "./projects.module.scss";
import Page from "../components/page/page";
import projects from "./api/projects.json";
import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
const duration = 0.3;

const Projects = () => {
  const [category, setCategory] = useState("all");
  function setFilter(e) {
    setCategory(e);
  }
  const [selected, setSelected] = useState(0);

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
      <div className={styles.filter}>
        <span
          className={
            styles.category + " " + `${category === "all" ? styles.active : ""}`
          }
          onClick={() => setFilter("all")}
        >
          All
        </span>
        <span
          className={
            styles.category +
            " " +
            `${category === "works" ? styles.active : ""}`
          }
          onClick={() => setFilter("works")}
        >
          Works
        </span>
        <span
          className={
            styles.category +
            " " +
            `${category === "side-projects" ? styles.active : ""}`
          }
          onClick={() => setFilter("side-projects")}
        >
          Side Projects
        </span>
      </div>
      <div className={styles.list}>
        {projects
          .sort((a, b) => (a.year > b.year ? -1 : 1))
          .filter(
            category === "all"
              ? (item) => item
              : (item) => item.category === category
          )
          .map((item, id) => {
            return (
              <div key={id} className={styles.item}>
                <motion.div
                  className={styles.motionItem}
                  key={id}
                  whileHover={() => {
                    setSelected(id);
                  }}
                >
                  <Project item={item} />
                  {id === selected && (
                    <motion.div
                      className={styles.selection}
                      layoutId="selected"
                      transition={{ type: "spring", duration: 1 }}
                    />
                  )}
                </motion.div>{" "}
              </div>
            );
          })}
      </div>
    </Page>
  );
};
export default Projects;
