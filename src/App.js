import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Radio from "./components/pages/Radio";
import Optical from "./components/pages/Optical";
import Events from "./components/pages/Events";
import Recruitment from "./components/pages/Recruitment";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/radio" exact component={Radio} />
          <Route path="/optical" exact component={Optical} />
          <Route path="/events" exact component={Events} />
          <Route path="/recruitment" exact component={Recruitment} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
