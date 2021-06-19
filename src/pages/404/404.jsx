import React from "react";

import Error404 from "../../website-arts/src-mat/404/error-1.gif";
import "./404.css";

const NotFoundPage = () => {
  return (
    <div id="gif-container">
      <img id="gif" src={Error404} alt="" />
    </div>
  );
};

export default NotFoundPage;
