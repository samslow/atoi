import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from "react-ga";

import About from "./pages/About";
import Unavailable from "./pages/Unavailable";

const App = () => {
  ReactGA.initialize("UA-129588106-2");

  return (
    <Router>
      <GlobalStyle />
      <Route exact path="/" component={About} />
      <Route path="/finish" component={Unavailable} />
    </Router>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #faf3ed;
  }
`;

export default App;
