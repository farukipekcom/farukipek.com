import "./App.css";
import React, { useEffect } from "react";
import Anasayfa from "./pages/Anasayfa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import NotFoundPage from "./pages/NotFoundPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
function App() {
  useEffect(() => {
    ReactGA.initialize("UA-130214097-6");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Helmet>
        <title>Faruk İpek</title>
        <meta
          name="description"
          content="Merhaba! Ben Faruk İpek. 2013 yılında ilk adımlarımı attığım bu sektörde, şu an freelance front-end developer olarak devam etmekteyim."
        />
      </Helmet>
      <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route path="/" exact component={Anasayfa} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:slug" component={Post} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}
export default App;
