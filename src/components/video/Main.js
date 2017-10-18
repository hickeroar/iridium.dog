import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from "./List";
import Watch from "./Watch";

const Main = () => (
  <Switch>
    <Route exact path='/video/' component={List}/>
    <Route exact path='/video/:id/' component={Watch}/>
  </Switch>
);

export default Main;
