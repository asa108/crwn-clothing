import React from "react";
import { Route, Switch } from "react-router-dom";

import './App.css';
import HomaPage from "./page/homepage/HomePage.jsx";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomaPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
