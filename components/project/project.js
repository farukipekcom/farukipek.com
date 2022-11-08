import Image from "next/image";
import styles from "./project.module.scss";
const Project = ({ title, img, category, url }) => {
  return (
    <a href={url} className={styles.item} target="_blank" rel="noreferrer">
      <div className={styles.image}>
        <Image src={img} alt={title} width={520} height={360} />
      </div>
      <h3 className={styles.title}>{title}</h3>

      <span className={styles.category}>
        {category.map((item, index) => {
          return (
              <span key={index}>{item.node.name}</span>
          );
        })}
      </span>
    </a>
  );
};

export default Project;
