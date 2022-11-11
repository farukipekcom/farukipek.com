import Head from "next/head";
import Header from "../header/header";
import Footer from "../footer/footer";
const Page = ({ children, ...tag }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
