import React from "react";
import { AnimatePresence } from "framer-motion";
import {Route, Link, Switch, useLocation } from "react-router-dom";
import "./App.css";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import E from "./components/E";

function App() {
  const location = useLocation()
  console.log(location)
  return (
    <div>
    <header>
        <Link to="/">A</Link>
        <Link to="/b">B</Link>
        <Link to="/c">C</Link>
        <Link to="/d">D</Link>
      </header>
    <AnimatePresence  initial={false} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={A}  exact/>
        <Route path="/b" component={B} />
        <Route path="/c" component={C} />
        <Route path="/d" component={D} />
        <Route path='/e' component={E} />
      </Switch>
    </AnimatePresence>
    </div>
  );
}

export default App;
