import Title from "../components/title/title";
import Post from "../components/post/post";
import Search from "../components/search/search";
import styles from "./blog.module.scss";
const Blog = () => {
  const blog = [
    {
      id: 1,
      title: "Quisque congue felis id dictum posuere.",
      date: "September 2, 2022",
      url: "post",
    },
    {
      id: 2,
      title: "Integer feugiat metus nec nisl pharetra ullamcorper.",
      date: "June 24, 2022",
      url: "post",
    },
    {
      id: 3,
      title: "Sed eget libero eu tellus consectetur cursus a eu ante.",
      date: "May 11, 2022",
      url: "post",
    },
    {
      id: 4,
      title: "Curabitur blandit tortor vel urna vehicula iaculis.",
      date: "April 3, 2022",
      url: "post",
    },
  ];
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <Title
          pagetitle={"Blog"}
          title={"I enjoy share about how I work, design and live."}
        />
        <Search />
        <div className={styles.list}>
          {blog.map((item) => {
            return (
              <>
                <Post title={item.title} date={item.date} url={item.url} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
