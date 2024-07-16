import React from "react";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import Image from "next/image";
import Link from "next/link";
import styles from "./photos.module.css";
async function getData() {
  const res = await fetch(
    `https://api.unsplash.com/users/farukipekcom/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30`,
    { next: { revalidate: 1296000 } },
  );
  return res.json();
}
export default async function Photos() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <Title>Photos</Title>
      <Text>
        I love taking photos of the world around me, capturing moments and
        emotions as they happen.
      </Text>
      <div className={styles.gallery}>
        {data.map((item) => {
          return (
            <Link
              key="id"
              href={item.links.html}
              target="_blank"
              className={styles.link}
            >
              <Image
                src={item.urls.raw}
                width={300}
                height={400}
                alt="Faruk Ipek"
                className={styles.photo}
              ></Image>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
