import React from 'react';
import { Route } from 'react-router-dom';
import Home from "./Home";
import AnimatedSwitch from "./AnimatedSwitch";
import List from "./video/List";
import Watch from "./video/Watch";

const Router = () => (
  <main>
    <AnimatedSwitch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/video/' component={List}/>
      <Route exact path='/video/:youtubeId/' component={Watch}/>
    </AnimatedSwitch>
  </main>
);

export default Router;
