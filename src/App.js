import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import LocalGameUI from "./LocalGameUI/LocalGameUI";
import SystemFrame from "./SystemFrame/SystemFrame";

const App = () => (
  <SystemFrame>
    <Switch>
      <Route component={LocalGameUI} path="/local" />
      <Route component={Home} path="/" />
    </Switch>
  </SystemFrame>
);

export default App;
