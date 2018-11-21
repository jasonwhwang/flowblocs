import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slideContainer: {
    height: '25vh',
  }
};

const FlowBlocItem = () => (
  <div className="t-bottomSection">
    <div className="t-bottomSectionContainer">
      <SwipeableViews containerStyle={styles.slideContainer} axis="y" enableMouseEvents={true}>
        <div className="t-item">
          <div className="t-bottomSectionTime box-label">
            <div className="box-blueText">NOW</div>
            <div>9 – 10</div>
          </div>
          <div className="t-flowBlocItemTitle box-flexRowCenter box-heading1">Wake Up</div>
          <div className="t-flowBlocItemLocation box-flexRowCenter box-label">Bed</div>
        </div>
        <div className="t-item">
          <div className="t-bottomSectionTime box-label">
            <div className="box-blueText">NEXT</div>
            <div>10 – 11</div>
          </div>
          <div className="t-flowBlocItemTitle box-flexRowCenter box-heading1">PHYS 213</div>
          <div className="t-flowBlocItemLocation box-flexRowCenter box-label">Loomis 141</div>
        </div>
      </SwipeableViews>
    </div>
  </div>
);

export {
  FlowBlocItem
};