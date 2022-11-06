import Image from "next/image";
import Twitter from "../components/icons/twitter";
import Copy from "../components/icons/copy";
import styles from "./post.module.scss";
const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            Quisque congue felis id dictum posuere.
          </h1>
          <div className={styles.info}>
            <span className={styles.date}>November 1, 2022</span>
            <span className={styles.readingtime}>4 min read</span>
          </div>
        </div>
        <div className={styles.article}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
            porttitor urna. In gravida, orci vel pretium lobortis, lorem purus
            auctor mauris, in sollicitudin orci enim vel enim. Integer consequat
            ex id tortor molestie accumsan. Quisque egestas, mi sed porta
            auctor, turpis sapien dignissim purus, et volutpat urna lorem
            blandit lectus.
          </p>
          <p>
            Nunc id risus vitae nisi hendrerit accumsan vel viverra mauris.
            Nullam sit amet magna sit amet risus accumsan sagittis id vitae
            neque. Morbi a odio vehicula, iaculis ligula ut, consectetur orci.
            Etiam accumsan consequat tellus ut feugiat.
          </p>
          <Image
            src="/post.jpg"
            alt="Post Name"
            width={800}
            height={440}
            className={styles.image}
          />
          <h2 className={styles.heading2}>Condimentum vitae sapien mi quis</h2>
          <p>
            Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
            eros. Fusce rutrum, lectus in blandit sagittis, mi tortor
            ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et
            neque sodales porta eu eget dui. Nunc eu quam sit amet justo
            elementum mollis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla,
            in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.
            Cras non leo at ipsum fringilla ullamcorper.
          </p>
        </div>
        <div className={styles.share}>
          <a href="" className={styles.item}>
            <Twitter size={15} />
            Twitter
          </a>
          <a href="" className={styles.item}>
            <Copy size={15} />
            Share
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
