import Header from "../header/header";
import Footer from "../footer/footer";
const Layout = ({ children }) => {
  return (
    <>
      <div className="background">
        <div className="container">
          <div className="background-line"></div>
        </div>
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
