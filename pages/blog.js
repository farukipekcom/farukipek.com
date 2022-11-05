/* eslint-disable react/no-unescaped-entities */
import Title from "../components/title/title";
import Post from '../components/post/post';
const Blog = () => {
  return (
    <div class="blog">
      <div class="container">
        <Title
          pagetitle={"Blog"}
          title={"I enjoy share about how I work, design and live."}
        />
        <div class="blog-search">
          <p class="blog-search-text">
            I've written 4 articles on my blog. Use the search below to filter
            by title.
          </p>
          <div class="blog-search-input">
            <input type="text" placeholder="Search articles" />
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.48322 1.82631C4.35272 1.82631 1.82063 4.36245 1.82063 7.48371C1.82063 10.6052 4.35266 13.1413 7.48322 13.1413C9.04823 13.1413 10.4632 12.5081 11.4887 11.483C12.514 10.4579 13.146 9.04542 13.146 7.48371C13.146 4.36245 10.6138 1.82631 7.48322 1.82631ZM0 7.48371C0 3.34749 3.35347 0 7.48322 0C11.6127 0 14.9664 3.34725 14.9664 7.48371C14.9664 9.22122 14.3736 10.8211 13.3812 12.0903L17.7322 16.4403C18.0883 16.7961 18.0895 17.3741 17.7345 17.7314C17.3799 18.0887 16.8037 18.0896 16.4476 17.7338L12.0922 13.38C10.8219 14.3742 9.22117 14.9674 7.48347 14.9674C3.35395 14.9674 0 11.6202 0 7.48371Z"
              />
            </svg>
          </div>
        </div>
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
