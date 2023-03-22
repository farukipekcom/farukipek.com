import Title from "../components/title/title";
import Project from "../components/project/project";
import styles from "./projects.module.scss";
import Page from "../components/page/page";
import projects from "./api/projects.json";
import { useState } from "react";
import { motion } from "framer-motion";
import ArrowRight from "../components/icons/arrow-right";
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "100%" },
};
const Projects = () => {
  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023];
  const [click, setClick] = useState(false);
  const [selectedYear, setSelectedYear] = useState("ALL");
  const [allProjects, setAllProjects] = useState(projects);
  const updateState = (year) => {
    const newArray = projects
      .filter((item) => item.year === year)
      .sort((a, b) => (a.year > b.year ? 1 : -1))
      .map((item) => {
        return { ...item };
      });
    setAllProjects(newArray);
    setSelectedYear(year);
  };
  const [isOpen, setIsOpen] = useState(false);

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
          className={styles.title}
          onClick={() => {
            setClick(!click);
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          Filter
          <ArrowRight size={15} />
        </span>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={click === true ? styles.years : styles.nofilter}
        >
          <span
            onClick={() => {
              setAllProjects(projects);
              setSelectedYear("ALL");
            }}
            className={selectedYear === "ALL" && styles.active}
          >
            ALL <div className={styles.count}>({projects.length})</div>
          </span>
          {years.map((item) => {
            return (
              <span
                onClick={() => updateState(item)}
                className={selectedYear === item && styles.active}
              >
                {item}
              </span>
            );
          })}
        </motion.div>
      </div>
      <div className={styles.list}>
        {allProjects
          .sort((a, b) => (a.year > b.year ? -1 : 1))
          .map((item, id) => {
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
