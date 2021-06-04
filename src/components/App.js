import React from "react";
import "./App.css";

// Pages
import MainPage from "../pages";
import Artwork from "../pages/artwork";
import Projects from "../pages/projects";
import About from "../pages/about";
import Contact from "../pages/contact";
import NotFoundPage from "../pages/404/404";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/artwork" component={Artwork} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
