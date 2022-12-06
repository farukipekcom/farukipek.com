import styles from "./title.module.scss";
import Button from "../button/button";
const Title = ({ pagetitle, title, details, hireme }) => {
  return (
    <>
      <div className={styles.pageTitle}>{pagetitle}</div>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.details}>{details}</h2>
      {hireme && <Button text={"Hire Me"} />}
    </>
  );
};

export default Title;
