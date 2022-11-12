import styles from "./404.module.scss";
import Page from "../components/page/page";
import Title from "../components/title/title";
import Button from "../components/button/button";
import NotFound from "../components/icons/notfound";
const Error404 = () => {
  return (
    <Page>
      <Title
        pagetitle={"404"}
        title={"404! Not Found!"}
        details={"The page you are looking  for does not exist!"}
      />
      <Button text={"Back to Home"} url="/" />
      <div className={styles.icon}>
        <NotFound />
      </div>
    </Page>
  );
};

export default Error404;
