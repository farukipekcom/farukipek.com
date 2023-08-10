import Title from "../components/title/title";
import Post from "../components/post/post";
import ArrowRight from "../components/icons/arrow-right";
import styles from "./index.module.scss";
import Page from "../components/page/page";
import projects from "./api/projects.json";
import Project from "../components/project/project";
import {supabase} from "./api/supabaseClient";
export default function Home({post}) {
  console.log(post);
  return (
    <Page
      title="Faruk Ipek | Front-end Developer"
      desc="Hey! I am Faruk Ipek, a front-end developer based in Charlotte, USA. I have been building stuff on the web for the since 2016.">
      <Title
        title={"Hey! I'm Faruk, a front-end developer based in Charlotte, USA."}
        details={"I've been building stuff on the web since 2016. I've worked with clients in various countries and industries."}
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
          {post.map((item, id) => {
            return (
              <div key={id}>
                <Post id={id} title={item.post_title} date={item.created_at} url={item.post_slug} />
              </div>
            );
          })}
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
          {projects
            .sort((a, b) => (a.year > b.year ? -1 : 1))
            .slice(0, 6)
            .map((item, id) => {
              return <Project key={id} id={id} item={item} />;
            })}
        </div>
      </div>
    </Page>
  );
}
export async function getStaticProps() {
  const {data} = await supabase.from("posts").select("*").order("created_at", {ascending: false});

  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}
