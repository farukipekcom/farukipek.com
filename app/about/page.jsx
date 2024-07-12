import React from "react";
import PageTitle from "../components/PageTitle";
import PageText from "../components/PageText";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="about">
        <div className="about-text">
          <PageTitle>
            I'm Faruk Ipek. I live in Chicago. I build things for the web.
          </PageTitle>
          <PageText>
            My interest in web development started in 2013 when I started my own
            website. I learned a lot about HTML & CSS after discovering
            Wordpress. I've been building stuff on the web for the last 6 years.
          </PageText>
          <PageText>
            My focus is on creating fast and cool interfaces for people. Right
            now I'm focused on Nexj.js. I love dealing with designs and writing
            HTML & CSS.
          </PageText>
          <PageText>
            Outside of programming, I love designing, cycling and traveling.
            Some of photos can be found on Instagram.
          </PageText>
        </div>
        <div className="about-photo">
          <Image
            src="/faruk-ipek.png"
            width={380}
            height={380}
            alt="Faruk Ipek"
          />
        </div>
      </div>
      <div className="gallery">
        <div>
          <Image
            src="/1.jpg"
            sizes="100vw"
            width={500}
            height={500}
            alt="Faruk Ipek"
          ></Image>
        </div>
        <div>
          <Image
            src="/2.jpg"
            sizes="100vw"
            width={500}
            height={500}
            alt="Faruk Ipek"
          ></Image>
        </div>
        <div>
          <Image
            src="/3.jpg"
            sizes="100vw"
            width={500}
            height={500}
            alt="Faruk Ipek"
          ></Image>
        </div>
        <div>
          <Image
            src="/4.jpg"
            sizes="100vw"
            width={500}
            height={500}
            alt="Faruk Ipek"
          ></Image>
        </div>
        <div>
          <Image
            src="/5.jpg"
            sizes="100vw"
            width={500}
            height={500}
            alt="Faruk Ipek"
          ></Image>
        </div>
        <div>
          <Image
            src="/6.jpg"
            sizes="100vw"
            width={500}
            height={500}
            alt="Faruk Ipek"
          ></Image>
        </div>
      </div>
    </main>
  );
}
