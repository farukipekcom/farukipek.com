import React from "react";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import Image from "next/image";
import styles from "./photos.module.css";
export default function Photos() {
  return (
    <main>
      <Title>Photos</Title>
      <Text>
        I love taking photos of the world around me, capturing moments and
        emotions as they happen.
      </Text>
      <div className={styles.gallery}>
        <Image src="/1.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
        <Image src="/2.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
        <Image src="/3.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
        <Image src="/4.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
        <Image src="/5.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
        <Image src="/6.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
        <Image src="/1.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
        <Image src="/2.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
        <Image src="/3.jpg" width={300} height={360} alt="Faruk Ipek"></Image>
      </div>
    </main>
  );
}
