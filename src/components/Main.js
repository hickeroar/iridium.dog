import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import VideoMain from "./video/Main";
import Index from "./Index";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Index}/>
      <Route path='/video/' component={VideoMain}/>
    </Switch>
  </main>
);

export default Main;
