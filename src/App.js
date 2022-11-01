import "./App.css";
import Airtable from "airtable";
import React, { useEffect, useState } from "react";
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
const base = new Airtable({
  apiKey: `${process.env.REACT_APP_AIRTABLE_KEY}`,
}).base(`${process.env.REACT_APP_AIRTABLE_BASE_ID}`);
function App() {
  useEffect(() => {
    ReactGA.initialize("UA-130214097-6");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const [blog, setBlog] = useState([]);
  useEffect(async () => {
    base("blog")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setBlog(records);
        fetchNextPage();
      });
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
            <Route path="/blog" exact component={() => <Blog blog={blog} />} />
            <Route
              path="/blog/:slug"
              render={({ match }) => <Post post={blog} match={match} />}
            />
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
