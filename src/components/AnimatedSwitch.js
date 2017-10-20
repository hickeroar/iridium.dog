import React, { Component } from 'react';
import {spring, AnimatedSwitch as TransitionSwitch } from 'react-router-transition';

import "./AnimatedSwitch.css";

class AnimatedSwitch extends Component {
  springAttributes = {
    stiffness: 100,
    damping: 20,
  };

  render() {
    return <TransitionSwitch
      atEnter={{
        opacity: 0,
        scale: 1.2,
        offset: 100,
      }}
      atLeave={{
        opacity: spring(0, this.springAttributes),
        scale: spring(0.8, this.springAttributes),
        offset: spring(100, this.springAttributes),
      }}
      atActive={{
        opacity: spring(1, this.springAttributes),
        scale: spring(1, this.springAttributes),
        offset: spring(0, this.springAttributes),
      }}
      mapStyles={(styles) => {
        return {
          opacity: styles.opacity,
          transform: `scale(${styles.scale}) translateY(${styles.offset}px)`,
        };
      }}
      className="transition-route-wrapper">
      {this.props.children}
    </TransitionSwitch>
  }
}

export default AnimatedSwitch;
