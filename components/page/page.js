import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./page.module.scss";
import { useRouter } from "next/router";
import Head from "next/head";
const Page = ({ children, ...tag }) => {
  const router = useRouter();
  const meta = {
    title: tag?.title,
    description: tag?.desc,
    url: "https://farukipek.com" + router.asPath,
    image: tag?.image ? tag.image : "https://farukipek.com/img/faruk-ipek.jpg",
    ...tag,
  };
  // https://github.com/ademilter/homepage/blob/master/components/page-transition.tsx
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charset="UTF-8" />
        <meta name="robots" content="follow, index" />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="author" content="Faruk Ipek" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
        <meta name="twitter:creator" content="@farukipekcom" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:site" content="@farukipekcom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={meta.url} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="background">
        <div className="container">
          <div className="background-line"></div>
        </div>
      </div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
