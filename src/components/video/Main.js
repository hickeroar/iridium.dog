import React from 'react';
import { Route } from 'react-router-dom';
import AnimatedSwitch from "../AnimatedSwitch";
import List from "./List";
import Watch from "./Watch";



const Main = () => (
  <AnimatedSwitch>
    <Route exact path='/video/' component={List}/>
    <Route exact path='/video/:id/' component={Watch}/>
  </AnimatedSwitch>
);

export default Main;
