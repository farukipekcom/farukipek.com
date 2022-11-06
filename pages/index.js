import Title from "../components/title/title";
import Post from "../components/post/post";
import ProjectCard from "../components/project-card/project-card";
import ArrowRight from "../components/icons/arrow-right";
import styles from "./index.module.scss";
export default function Home() {
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.container}>
          <Title
            title={
              "Hey! I'm Faruk, a front-end developer based in Charlotte, USA."
            }
            details={
              "I've been building stuff on the web for the last 6 years. I've worked with clients in various countries and industries."
            }
            hireme={1}
          />
          <div className={styles.blog}>
            <h2 className={styles.shadow}>BLOG</h2>
            <p className={styles.heading}>Check out my latest articles</p>
            <a href="blog" className={styles.link}>
              Browse all blog posts
              <ArrowRight size={15} />
            </a>
            <div className={styles.blogList}>
              <Post
                title={"Quisque congue felis id dictum posuere."}
                date={"September 2, 2022"}
                url={"post"}
              />
              <Post
                title={"Integer feugiat metus nec nisl pharetra ullamcorper."}
                date={"June 24, 2022"}
                url={"post"}
              />
              <Post
                title={
                  "Sed eget libero eu tellus consectetur cursus a eu ante."
                }
                date={"May 11, 2022"}
                url={"post"}
              />
              <Post
                title={"Curabitur blandit tortor vel urna vehicula iaculis."}
                date={"April 3, 2022"}
                url={"post"}
              />
            </div>
          </div>
          <div className={styles.projects}>
            <h2 className={styles.shadow}>PROJECTS</h2>
            <p className={styles.heading}>Take a look at the latest projects</p>
            <a href="projects" className={styles.link}>
              Browse all projects
              <ArrowRight size={15} />
            </a>
            <div className={styles.projectsList}>
              <ProjectCard
                title={"Quisque congue"}
                category={"WEB DESIGN + UI DESIGN + SEO"}
              />
              <ProjectCard
                title={"Integer feugiat metus"}
                category={"WEB DESIGN + UI DESIGN + SEO"}
              />
              <ProjectCard
                title={"Sed eget libero"}
                category={"WEB DESIGN + UI DESIGN + SEO"}
              />
              <ProjectCard
                title={" Curabitur blandit"}
                category={"WEB DESIGN + UI DESIGN + SEO"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
