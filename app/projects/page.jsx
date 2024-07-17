import React from "react";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import List from "../components/Projects/ProjectList";
import styles from "./projects.module.css";
export const metadata = {
  title: "Projects",
  description:
    "I am Faruk Ipek, a freelancer front-end developer from Chicago, USA. Check out my projects. Send me a message and talk about the new project.",
};
export default function Projects() {
  return (
    <main>
      <Title>Projects</Title>
      <Text>Companies I’ve worked with and some side projects I’ve done.</Text>
      <div className={styles.list}>
        <List />
      </div>
    </main>
  );
}
