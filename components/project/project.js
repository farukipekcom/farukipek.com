import Image from "next/image";
import styles from "./project.module.scss";
const Project = ({ title, img, category, url }) => {
  return (
    <a href={url} class={styles.item} target="_blank" rel="noreferrer">
      <div class={styles.image}>
        <Image src={img} alt={title} width={520} height={360} />
      </div>
      <h3 class={styles.title}>{title}</h3>
      <span class={styles.category}>{category}</span>
    </a>
  );
};

export default Project;
