import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Title from "./components/title/title";
import Aboutme from "./pages/Aboutme";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";
import ShareButton from "./components/sharebutton/sharebutton";
import ShareMobile from "./components/sharebutton/sharemobile";

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
      <ShareButton />
      <ShareMobile />
    </BrowserRouter>
  );
};

export default App;
