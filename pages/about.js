/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Page from "../components/page/page";
import Title from "../components/title/title";
import styles from "./about.module.scss";
export default function About() {
  return (
    <Page
      title="About - Faruk Ipek"
      desc="I am Faruk Ipek, a freelancer front-end developer. I have been building stuff on the internet for the last 6 years.">
      <Title pagetitle={"About"} title={"I'm Faruk Ipek, a freelancer front-end developer. I build things for the web."} />
      <div className={styles.details}>
        <div className={styles.left}>
          <h2 className={styles.heading2}>
            My interest in web development started in 2013 when I started my own website. I learned a lot about HTML & CSS after discovering
            Wordpress. <br />
            <br />
            I've been building stuff on the web since 2016.
          </h2>
          <Image src="/faruk-ipek-portrait.jpg" alt="Faruk İpek" width={500} height={600} className={styles.image} />
        </div>
        <div className={styles.right}>
          <p className={styles.text}>
            Outside of programming, I love designing, cycling and traveling. Some of photos can be found on Instagram. <br />
            <br />
            My focus is on creating fast and cool interfaces for people. Right now I'm focused on Nexj.js. I love dealing with designs and
            writing HTML & CSS.
          </p>
          <Image src="/cycling.jpg" alt="Faruk İpek" width={500} height={600} className={styles.image} />
        </div>
      </div>
    </Page>
  );
}
