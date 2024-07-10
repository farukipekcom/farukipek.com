/* eslint-disable react/no-unescaped-entities */
import Button from "./components/Button";
export default function Home() {
  return (
    <main className="pagecontainer">
      <div className="hero">
        <div className="title">Hey! I'm Faruk 👋</div>
        <div className="text">
          I'm a front-end developer based in Chicago, USA. I've been building
          stuff on the web for the last 6 years. I've worked with clients in
          various countries and industries.
        </div>
        <Button>Get in touch</Button>
      </div>
    </main>
  );
}
