import Title from "../components/title/title";
import Post from "../components/post/post";
import ProjectCard from "../components/project-card/project-card";
import ArrowRight from "../components/icons/arrow-right";
import styles from "./index.module.scss";
import Page from "../components/page/page";
export default function Home({ post, project }) {
  return (
    <Page
      title="Faruk Ipek"
      desc="Hey! I'm Faruk Ipek, a front-end developer based in Charlotte, USA. I've been building stuff on the web for the since 2016."
    >
      <Title
        title={"Hey! I'm Faruk, a front-end developer based in Charlotte, USA."}
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
          {post.nodes.map((item) => {
            return (
              <div key={item.postId}>
                <Post title={item.title} date={item.date} url={item.slug} />
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
          {project.nodes.map((item) => {
            return (
              <div className={styles.item} key={item.projectId}>
                <ProjectCard
                  title={item.title}
                  category={item.terms.edges}
                  url={item.projects.projectsLink}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
}
export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query NewQuery {
        posts {
          nodes {
            postId
            slug
            title
            date
          }
        }
        projects {
          nodes {
            title
            slug
            projectId
            projects {
              projectsLink
            }
            terms {
              edges {
                node {
                  slug
                  name
                }
              }
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      },
      `,
    }),
  });
  const json = await res.json();
  return {
    props: {
      post: json.data.posts,
      project: json.data.projects,
    },
    revalidate: 10,
  };
}
