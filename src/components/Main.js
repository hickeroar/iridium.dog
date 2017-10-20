import React from 'react';
import { Route } from 'react-router-dom';
import Index from "./Index";
import AnimatedSwitch from "./AnimatedSwitch";
import List from "./video/List";
import Watch from "./video/Watch";

const Main = () => (
  <main>
    <AnimatedSwitch>
      <Route exact path='/' component={Index}/>
      <Route exact path='/video/' component={List}/>
      <Route exact path='/video/:id/' component={Watch}/>
    </AnimatedSwitch>
  </main>
);

export default Main;
