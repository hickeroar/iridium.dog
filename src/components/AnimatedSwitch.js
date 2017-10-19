import React, { Component } from 'react';
import {spring, AnimatedSwitch as TransitionSwitch } from 'react-router-transition';

import "./AnimatedSwitch.css";

class AnimatedSwitch extends Component {
  springAttributes = {
    stiffness: 300,
    damping: 30,
  };

  render() {
    return <TransitionSwitch
      atEnter={{
        opacity: 0,
        scale: 1.2,
      }}
      atLeave={{
        opacity: spring(0, this.springAttributes),
        scale: spring(0.8, this.springAttributes),
      }}
      atActive={{
        opacity: spring(1, this.springAttributes),
        scale: spring(1, this.springAttributes),
      }}
      mapStyles={(styles) => {
        return {
          opacity: styles.opacity,
          transform: `scale(${styles.scale})`,
        };
      }}
      className="transition-route-wrapper">
      {this.props.children}
    </TransitionSwitch>
  }
}

export default AnimatedSwitch;
