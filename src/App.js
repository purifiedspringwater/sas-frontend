import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from "./Main";
import SignIn from "./SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
