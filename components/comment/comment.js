import styles from "./comment.module.scss";
import { format, parseISO } from "date-fns";
const Comment = ({ comment }) => {
  const authorName = comment.author.node.name;
  return (
    <div className={styles.comment}>
      <div className={styles.top}>
        <div className={styles.image}>
          {authorName.slice(0, 2).toUpperCase()}
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{comment.author.node.name}</div>
          <div className={styles.date}>
            <time dateTime={comment.date}>
              {format(parseISO(comment.date), "d LLLL yyyy hh:mm aaa")}
            </time>
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
      </div>
    </div>
  );
};

export default Comment;
