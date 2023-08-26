import {useState} from "react";
import styles from "./project.module.scss";
import {motion} from "framer-motion";

const Project = ({item, id}) => {
  const [startHover, setStartHover] = useState(false);
  const [selected, setSelected] = useState();
  return (
    <div className={styles.item}>
      <motion.div
        onHoverStart={() => {
          setSelected(id);
          setStartHover({
            opacity: 1,
            y: -8,
          });
        }}
        onHoverEnd={() => {
          setStartHover({
            opacity: 0,
            y: 0,
          });
          setSelected(undefined);
        }}>
        <a href={item.link} target="_blank">
          <div className={styles.itemInner}>
            <div className={styles.title}>{item.name}</div>
            <motion.div
              className={styles.category}
              initial={{opacity: 0}}
              animate={startHover}
              transition={{
                duration: 0.3,
                delay: 0.15,
              }}>
              {item.category === "works" ? "Work" : item.category === "side-projects" ? "Side Project" : ""}
            </motion.div>
            <div className={styles.right}>
              <div className={styles.tag}>{item.keywords.join(", ")}</div>
              <div className={styles.year}>{item.year}</div>
            </div>
          </div>
        </a>
      </motion.div>
      {id === selected && <motion.div className={styles.selection} layoutId="selected" transition={{type: "spring", duration: 0.6}} />}
    </div>
  );
};

export default Project;
