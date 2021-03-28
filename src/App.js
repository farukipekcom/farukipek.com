import "./App.css";
import React from "react";
import Anasayfa from "./pages/Anasayfa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
function App() {
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
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}
export default App;
