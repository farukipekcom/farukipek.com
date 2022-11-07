import styles from "./post.module.scss";
import ArrowRight from "../icons/arrow-right";
const Post = ({ title, date, url }) => {
  return (
    <a href={"blog/" + url} className={styles.post}>
      <h3 className={styles.title}>{title}</h3>
      <ArrowRight size={15} />
      <span className={styles.date}>{date}</span>
    </a>
  );
};

export default Post;
