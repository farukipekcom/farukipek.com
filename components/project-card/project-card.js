import styles from "./project-card.module.scss";
const ProjectCard = ({ title, category, url }) => {
  return (
    <a href={url} className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.category}>
        {category.map((item, index) => {
          return <span key={index}>{item.node.name}</span>;
        })}
      </span>
    </a>
  );
};

export default ProjectCard;
