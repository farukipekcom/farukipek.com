import "../styles/main.scss";
// import "../styles/header.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
