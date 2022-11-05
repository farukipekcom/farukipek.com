import styles from './post.module.scss'
import ArrowRight from '../icons/arrow-right';
const Post = ({title,date}) => {
    return (
       <a href="post" class={styles.post}>
            <h3 class={styles.title}>
              {title}
            </h3>
            <ArrowRight size={15}/>
            <span class={styles.date}>{date}</span>
          </a>
    );
}

export default Post;