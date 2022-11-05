/* eslint-disable react/no-unescaped-entities */
import Title from "../components/title/title";
export default function Home() {
  return (
    <>
      <div className="homepage">
        <div className="container">
          <Title
            title={
              "Hey! I'm Faruk, a front-end developer based in Charlotte, USA."
            }
            details={
              "I've been building stuff on the web for the last 6 years. I've worked with clients in various countries and industries."
            }
            hireme={1}
          />
          <div className="homepage-blog">
            <h2 className="shadow">BLOG</h2>
            <p className="homepage-heading">Check out my latest articles</p>
            <a href="blog" className="homepage-link">
              Browse all blog posts
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <div className="homepage-blog-list">
              <a href="post" className="homepage-blog-list-post">
                <h3 className="homepage-blog-list-post-title">
                  Quisque congue felis id dictum posuere.
                </h3>
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
                </svg>
                <span className="homepage-blog-list-post-date">
                  September 2, 2022
                </span>
              </a>
              <a href="post" className="homepage-blog-list-post">
                <h3 className="homepage-blog-list-post-title">
                  Integer feugiat metus nec nisl pharetra ullamcorper.
                </h3>
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
                </svg>
                <span className="homepage-blog-list-post-date">
                  June 24, 2022
                </span>
              </a>
              <a href="post" className="homepage-blog-list-post">
                <h3 className="homepage-blog-list-post-title">
                  Sed eget libero eu tellus consectetur cursus a eu ante.
                </h3>
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
                </svg>
                <span className="homepage-blog-list-post-date">
                  May 11, 2022
                </span>
              </a>
              <a href="post" className="homepage-blog-list-post">
                <h3 className="homepage-blog-list-post-title">
                  Curabitur blandit tortor vel urna vehicula iaculis.
                </h3>
                <svg
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
                </svg>
                <span className="homepage-blog-list-post-date">
                  April 3, 2022
                </span>
              </a>
            </div>
          </div>
          <div className="homepage-projects">
            <h2 className="shadow">PROJECTS</h2>
            <p className="homepage-heading">
              Take a look at the latest projects
            </p>
            <a href="projects" className="homepage-link">
              Browse all projects
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.1759 4.89909L9.85794 0.864664C9.46002 0.492866 8.79688 0.492866 8.39896 0.864664C8.00104 1.23646 8.00104 1.85606 8.39896 2.22786L10.9485 4.62368L1.51691 4.62368C0.942169 4.62368 0.485352 5.0505 0.485352 5.58751C0.485352 6.12451 0.942169 6.55134 1.51691 6.55134L10.9485 6.55134L8.39896 8.93342C8.00104 9.30521 8.00104 9.92481 8.39896 10.2966C8.60527 10.4894 8.87059 10.5858 9.13581 10.5858C9.40102 10.5858 9.66633 10.4894 9.87265 10.2966L14.1758 6.27595C14.3674 6.09692 14.4854 5.84913 14.4854 5.58748C14.4854 5.32584 14.3821 5.07804 14.1758 4.89902L14.1759 4.89909Z" />
              </svg>
            </a>
            <div className="homepage-projects-list">
              <a href="" className="homepage-projects-list-item">
                <h3 className="homepage-projects-list-item-title">
                  Quisque congue
                </h3>
                <span className="homepage-projects-list-item-category">
                  WEB DESIGN + UI DESIGN + SEO
                </span>
              </a>
              <a href="" className="homepage-projects-list-item">
                <h3 className="homepage-projects-list-item-title">
                  Integer feugiat metus
                </h3>
                <span className="homepage-projects-list-item-category">
                  WEB DESIGN + UI DESIGN + SEO
                </span>
              </a>
              <a href="" className="homepage-projects-list-item">
                <h3 className="homepage-projects-list-item-title">
                  Sed eget libero
                </h3>
                <span className="homepage-projects-list-item-category">
                  WEB DESIGN + UI DESIGN + SEO
                </span>
              </a>
              <a href="" className="homepage-projects-list-item">
                <h3 className="homepage-projects-list-item-title">
                  Curabitur blandit
                </h3>
                <span className="homepage-projects-list-item-category">
                  WEB DESIGN + UI DESIGN + SEO
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
