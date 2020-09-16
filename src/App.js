import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Title from "./components/title/title";
import Aboutme from "./pages/Aboutme";
import Interests from "./pages/Interests";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Title />
      <Navbar />
      <Switch>
        <Route path="/experiences">
          <Experiences />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/interests">
          <Interests />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Aboutme />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
