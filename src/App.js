import React from "react";
import { Route, Switch } from "react-router-dom";

import './App.css';
import HomaPage from "./components/homepage/HomePage";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomaPage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
