import Head from "next/head";
const Meta = ({
  title = "Faruk Ipek",
  desc = "I'm Faruk Ipek, a freelancer front-end developer from Charlotte USA. I build things on the web for clients in various countries.",
  url = "https://farukipek.com",
  image = "https://farukipek.com/img/faruk-ipek.jpg",
}) => {
  console.log(image);
  return (
    <Head>
      <title>{title}</title>
      <html lang="en" />
      <meta charset="UTF-8" />
      <meta name="robots" content="follow, index" />
      <meta name="title" content={title} />
      <meta name="description" content={desc} />
      <meta name="author" content="Faruk Ipek" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content="@farukipekcom" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:site" content="@farukipekcom" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default Meta;
