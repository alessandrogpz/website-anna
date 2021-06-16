import React from "react";
import "./App.css";

// Pages
import MainPage from "../pages";
import DigitalArt from "../pages/digital-art";
import VideoArt from "../pages/video-art";
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
        <Route exact path="/digital-art" component={DigitalArt} />
        <Route exact path="/video-art" component={VideoArt} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />

        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
