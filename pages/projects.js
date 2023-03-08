import Title from "../components/title/title";
import Project from "../components/project/project";
import styles from "./projects.module.scss";
import Page from "../components/page/page";
const Projects = ({ allProject }) => {
  const projects = allProject.nodes;
  return (
    <Page
      title="Projects - Faruk Ipek"
      desc="I'm Faruk Ipek, a freelancer front-end developer from Charlotte USA. Check out my projects. Send me a message and talk about the new project."
    >
      <Title
        pagetitle={"Projects"}
        title={
          "Check out my projects. Send me a message and talk about the new project."
        }
        details={
          "Check out my professional portfolio. I work remotely and work on freelance projects."
        }
      />
      <div className={styles.list}>
        {projects.map((item) => {
          return (
            <div className={styles.item} key={item.projectId}>
              <Project
                title={item.title}
                img={item.featuredImage.node.mediaItemUrl}
                category={item.terms.edges}
                url={item.projects.projectsLink}
              />
            </div>
          );
        })}
      </div>
    </Page>
  );
};

export default Projects;

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query NewQuery {
        projects(first: 100) {
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
      }`,
    }),
  });
  const json = await res.json();
  return {
    props: {
      allProject: json.data.projects,
    },
    revalidate: 10,
  };
}
