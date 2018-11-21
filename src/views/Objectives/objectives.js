import React, { Component } from 'react';
import './objectives.css';

class Objectives extends Component {
  render() {
    return (
      <div className="objectives">
        <div className="o-section">
          <div className="o-title">
            <div className="o-titletext">Hello There</div>
            <div className="o-titleflex"></div>
            <div className="o-titleicons">
              <i className="ion-md-star o-smallstar"></i>
              <i className="ion-ios-add o-margin"></i>
              <i className="ion-md-more o-margin"></i>
            </div>
          </div>
          <div className="o-obj">
            <div className="o-item">
              <div className="o-check">
                <label className="checkmark-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="o-checkflex">Hello</div>
              <div className="o-time">5%</div>
              <div className="o-time o-marginsmall">5d</div>
            </div>
            <div className="o-item">
              <div className="o-check">
                <label className="checkmark-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="o-checkflex">Hello</div>
              <div className="o-time">5%</div>
              <div className="o-time o-marginsmall">5d</div>
            </div>
          </div>
        </div>

        <div className="o-add"><i className="ion-ios-add-circle"></i></div>
      </div>
    );
  }
}

export default Objectives;