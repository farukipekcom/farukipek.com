import React from "react";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import List from "../components/Projects/ProjectList";
import styles from "./projects.module.css";
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
