import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Unavailable from "./pages/Unavailable";

const App = () => {
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
    font-family: "JejuMyeongjoOTF";
  }
`;

export default App;
