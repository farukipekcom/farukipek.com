import React from "react";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description:
    "I am Faruk Ipek, a freelancer front-end developer from Chicago, USA. I have been building stuff on the internet for the last 6 years.",
};

export default function About() {
  return (
    <main>
      <div className={styles.about}>
        <Image
          src="/faruk-ipek.png"
          width={360}
          height={360}
          alt="Faruk Ipek"
          className={styles.photo}
        />
        <div className="page-intro">
          <Title>I'm Faruk Ipek, a front-end developer based in Chicago.</Title>
          <Text>
            My journey in web development began in 2016 when I created my first
            website. My journey in web development began in 2016 when I created
            my first website. Through WordPress, I gained a solid foundation in
            web technologies, and I've been developing web projects ever since.
          </Text>
          <Text>
            My primary focus is on building fast, engaging interfaces, currently
            with a keen interest in Next.js. I enjoy crafting designs and
            writing HTML & CSS to bring ideas to life.
          </Text>
          <Text>
            When I'm not programming, I love to immerse myself in various
            activities. Photography is a significant passion of mine, and I
            often capture moments from my cycling, hiking, and traveling
            adventures. I enjoy exploring new trails and landscapes, whether on
            two wheels or on foot. These activities not only keep me active but
            also provide inspiration for my design work. You can check out some
            of my photos on Instagram.
          </Text>
        </div>
      </div>
      <div className={styles.gallery}>
        <Image
          src="/about-1.jpg"
          sizes="100vw"
          width={500}
          height={500}
          alt="Faruk Ipek"
        ></Image>
        <Image
          src="/about-2.jpg"
          sizes="100vw"
          width={500}
          height={500}
          alt="Faruk Ipek"
        ></Image>
        <Image
          src="/about-3.jpg"
          sizes="100vw"
          width={500}
          height={500}
          alt="Faruk Ipek"
        ></Image>
        <Image
          src="/about-4.jpg"
          sizes="100vw"
          width={500}
          height={500}
          alt="Faruk Ipek"
        ></Image>
        <Image
          src="/about-5.jpg"
          sizes="100vw"
          width={500}
          height={500}
          alt="Faruk Ipek"
        ></Image>
        <Image
          src="/about-6.jpg"
          sizes="100vw"
          width={500}
          height={500}
          alt="Faruk Ipek"
        ></Image>
      </div>
    </main>
  );
}
