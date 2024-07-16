import React from "react";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import Image from "next/image";
import styles from "./about.module.css";
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
          <Title>
            I'm Faruk Ipek. I live in Chicago. I build things for the web.
          </Title>
          <Text>
            My interest in web development started in 2013 when I started my own
            website. I learned a lot about HTML & CSS after discovering
            Wordpress. I've been building stuff on the web for the last 6 years.
          </Text>
          <Text>
            My focus is on creating fast and cool interfaces for people. Right
            now I'm focused on Nexj.js. I love dealing with designs and writing
            HTML & CSS.
          </Text>
          <Text>
            Outside of programming, I love designing, cycling and traveling.
            Some of photos can be found on Instagram.
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
