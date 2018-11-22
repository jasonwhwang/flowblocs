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
    this.initializeHeight = this.initializeHeight.bind(this);
  }

  initializeHeight() {
    // document.getElementsByTagName("html")[0].style.height = window.outerHeight+"px";
    // console.log(document.getElementsByTagName("html")[0].style.height);
    window.addEventListener("resize", function() {
      if(document.activeElement.tagName === "input") {
         window.setTimeout(function() {
            document.activeElement.scrollIntoViewIfNeeded();
         },0);
      }
   })
  }

  render() {
    this.initializeHeight();
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
