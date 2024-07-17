import Button from "./components/Button/Button";
import Arrow from "./components/icons/Arrow";
import Link from "next/link";
import BlogList from "./components/Blog/BlogList";
import ProjectList from "./components//Projects/ProjectList";
import Title from "./components/Title/Title";
import Text from "./components/Text/Text";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <Title>Hey! I'm Faruk 👋</Title>
        <Text>
          I'm a front-end developer based in Chicago, USA. I've been building
          stuff on the web for the last 6 years. I've worked with clients in
          various countries and industries.
        </Text>
        <Button>Get in touch</Button>
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>
          <div className={styles.title}>Posts</div>
          <Link href="/blog" className={`${styles.button} group`}>
            View all blog posts
            <Arrow size={20} />
          </Link>
        </div>
        <BlogList limit="5" />
      </div>
      <div className={styles.section}>
        <div className={styles.heading}>
          <div className={styles.title}>Projects</div>
          <Link href="/projects" className={`${styles.button} group`}>
            View all projects
            <Arrow size={20} />
          </Link>
        </div>
        <ProjectList limit="8" />
      </div>
    </main>
  );
}
