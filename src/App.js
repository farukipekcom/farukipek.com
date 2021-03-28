import "./App.css";
import React from "react";
import Anasayfa from "./pages/Anasayfa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
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
    </div>
  );
}
export default App;
