import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App(){
  return (
    <Router>
      <Switch>
      <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
key는 react.js에서만 map안에서 component들을 render할 때 사용
*/