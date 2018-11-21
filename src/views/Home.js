import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Affirmations from './Affirmations/affirmations';
import Milestones from './Milestones/milestones';
import Objectives from './Objectives/objectives';
import Schedule from './Schedule/schedule';
import Time from './Time/time';

class Home extends Component {
  constructor(props) {
    super(props);
    this.initializeVh = this.initializeVh.bind(this);
  }

  initializeVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  render() {
    this.initializeVh();
    return (
      <SwipeableViews index={2} enableMouseEvents={true}>
        <Milestones />
        <Affirmations />
        <Time />
        <Schedule />
        <Objectives />
      </SwipeableViews>
    );
  }
}

export default Home;
