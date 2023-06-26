import styles from "./post.module.scss";
import {format, parseISO} from "date-fns";
import {motion} from "framer-motion";
import {useState} from "react";
const Post = ({id, title, date, url}) => {
  const [selected, setSelected] = useState();
  return (
    <div className={styles.item}>
      <motion.div
        onHoverStart={() => {
          setSelected(id);
        }}
        onHoverEnd={() => {
          setSelected(undefined);
        }}>
        <a href={"blog/" + url}>
          <div className={styles.itemInner}>
            <div className={styles.title}>{title}</div>
            <div className={styles.year}>
              <time dateTime={date}>{format(parseISO(date), "LLL d, yyyy")}</time>
            </div>
          </div>
        </a>
      </motion.div>
      {id === selected && <motion.div className={styles.selection} layoutId="selected" transition={{type: "spring", duration: 0.6}} />}
    </div>
  );
};
export default Post;
