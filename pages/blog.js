/* eslint-disable react/no-unescaped-entities */
import Title from "../components/title/title";
import Post from '../components/post/post';
import Search from '../components/search/search'
const Blog = () => {
  return (
    <div class="blog">
      <div class="container">
        <Title
          pagetitle={"Blog"}
          title={"I enjoy share about how I work, design and live."}
        />
        <Search />
        <div class="blog-list">
         <Post title={"Quisque congue felis id dictum posuere."} date={"September 2, 2022"} />
         <Post title={"Integer feugiat metus nec nisl pharetra ullamcorper."} date={"June 24, 2022"} />
         <Post title={"Sed eget libero eu tellus consectetur cursus a eu ante."} date={"May 11, 2022"} />
         <Post title={"Curabitur blandit tortor vel urna vehicula iaculis."} date={"April 3, 2022"} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
