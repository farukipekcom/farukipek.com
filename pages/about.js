/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Title from "../components/title/title";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <Title
            pagetitle={"About"}
            title={
              "I'm Faruk Ipek, a freelancer front-end developer from Charlotte USA. I build things for the web."
            }
          />
          <div className="about-details">
            <div className="about-details-left">
              <h2 className="about-details-left-text">
                My interest in web development started in 2013 when I started my
                own website. I learned a lot about HTML & CSS after discovering
                Wordpress. <br />
                <br />
                I've been building stuff on the web for the last 6 years
              </h2>
              <Image
                src="/faruk-ipek.jpg"
                alt="Faruk İpek"
                width={500}
                height={600}
              />
            </div>
            <div className="about-details-right">
              <p className="about-details-right-text">
                Outside of programming, I love designing, cycling and traveling.
                Some of photos can be found on Instagram. <br />
                <br />
                My focus is on creating fast and cool interfaces for people.
                Right now I'm focused on Nexj.js. I love dealing with designs
                and writing HTML & CSS.
              </p>
              <Image
                src="/cycling.jpg"
                alt="Faruk İpek"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
