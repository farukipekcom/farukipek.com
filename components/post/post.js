import styles from "./post.module.scss";
import ArrowRight from "../icons/arrow-right";
import { format, parseISO } from "date-fns";
const Post = ({ title, date, url }) => {
  return (
    <a href={"blog/" + url} className={styles.post}>
      <h3 className={styles.title}>{title}</h3>
      <ArrowRight size={15} />
      <span className={styles.date}>
        <time dateTime={date}>{format(parseISO(date), "LLLL d, yyyy")}</time>
      </span>
    </a>
  );
};

export default Post;
