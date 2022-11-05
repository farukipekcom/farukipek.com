import styles from './project-card.module.scss';
const ProjectCard = ({title,category}) => {
    return (
        <a href="" className={styles.item}>
                <h3 className={styles.title}>
                  {title}
                </h3>
                <span className={styles.category}>
                  {category}
                </span>
              </a>
    );
}

export default ProjectCard;