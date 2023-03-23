import Image from "next/image";
import styles from "./project.module.scss";
const Project = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.first}>
        <Image src={item.image1} alt={item.name} width={240} height={120} />
        <div className={styles.firstDetail}>
          <span>
            Project / <span className={styles.title}>{item.name}</span>
          </span>
          <span className={styles.year}>{item.year}</span>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.logo}>
          <Image src={item.image2} alt={item.name} width={240} height={120} />
        </div>
        <div className={styles.secondDetail}>
          <div className={styles.keywords}>{item.keywords.join(", ")}</div>
          <a href={item.link} className={styles.view} target="_blank">
            View
            <Image
              src="/right-arrow.svg"
              alt="Right Arrow"
              width={12}
              height={9}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
