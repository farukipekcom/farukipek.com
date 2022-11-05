import styles from "./title.module.scss";
const Title = ({ pagetitle, title,details }) => {
  return (
    <>
      <div className={styles.pageTitle}>{pagetitle}</div>
      <h1 className={styles.title}>{title}</h1>
      <h1 className={styles.details}>{details}</h1>
    </>
  );
};

export default Title;
