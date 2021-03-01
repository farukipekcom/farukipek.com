import "./App.css";
import images from "./img";
import Airtable from "airtable";
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";

import Anasayfa from "./pages/Anasayfa";
import {
  Box,
  Button,
  Text,
  Link,
  Spinner,
  extendTheme,
  Container,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
const base = new Airtable({ apiKey: "keyh0pAZnYNujCri8" }).base(
  "appoPS45E5iQEwpMt"
);

function App({ theme }) {
  const [about, setAbout] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    base("about")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setAbout(records);
        fetchNextPage();
      });
    base("portfolio")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setPortfolio(records);
        fetchNextPage();
      });
    base("blog")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setBlog(records);
        fetchNextPage();
      });
  }, []);
  const id = 4;
  return (
    <div className="App">
      {blog.map((blog) => {
        return <div></div>;
      })}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/blog">
            <Blog blog={blog} />
          </Route>
          <Route path="/post/:slug_name">
            <Post blog={blog} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
