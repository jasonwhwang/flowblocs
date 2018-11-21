import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './milestone.css';

import Milestone from './milestone';

const styles = {
  slideContainer: {
    height: 'calc(100vh - 8rem)'
  }
};

class Milestones extends Component {
  render() {
    return (
      <div className="milestones">
        <div className="m-arrow box-flexRowCenter">
          <i className="ion-ios-arrow-up"></i>
        </div>
        <div className="m-more">
          <button className="m-moreButton"><i className="ion-md-more m-moreicon"></i></button>
        </div>

        <SwipeableViews containerStyle={styles.slideContainer} index={0} enableMouseEvents={true} axis="y-reverse">
          <Milestone />
          <Milestone />
        </SwipeableViews>

        <div className="m-arrow box-flexRowCenter">
          <i className="ion-ios-arrow-down"></i>
        </div>
      </div>
    );
  }
}

export default Milestones;