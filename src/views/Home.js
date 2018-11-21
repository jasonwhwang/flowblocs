import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Affirmations from './Affirmations/affirmations';
import Milestones from './Milestones/milestones';
import Objectives from './Objectives/objectives';
import Schedule from './Schedule/schedule';
import Time from './Time/time';

class Home extends Component {
  render() {
    return (
      <SwipeableViews index={0} enableMouseEvents={true}>
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
