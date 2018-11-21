import React, { Component } from 'react';
import './schedule.css';

class Schedule extends Component {
  render() {
    var val = 45; // 3px per minute, 3*15minutes = 45px height;
    var val2 = 0;
    var val3 = 120;
    var val4 = 280
    var val5 = 350;
    return (
      <div className="schedule">
        <div className="s-date"><div>Monday, October 1</div></div>
        <div className="s-add"><i className="ion-ios-add"></i></div>
        <div className="s-list">
          <div className="s-timelist">
            <div className="s-time">9</div>
            <div className="s-time">10</div>
            <div className="s-time">11</div>
            <div className="s-time">12</div>
            <div className="s-time">1</div>
            <div className="s-time">2</div>
            <div className="s-time">3</div>
            <div className="s-time">4</div>
            <div className="s-time">5</div>
            <div className="s-time">6</div>
            <div className="s-time">7</div>
            <div className="s-time">8</div>
            <div className="s-time">9</div>
            <div className="s-time">10</div>
            <div className="s-time">11</div>
          </div>
          <div className="s-bloclist">
            <div className="s-bloc" style={{height: val+"px", marginTop: val2+"px"}}>Wake Up</div>
            <div className="s-bloc" style={{height: val+"px", marginTop: val3+"px"}}>Breakfast</div>
            <div className="s-bloc" style={{height: val+"px", marginTop: val4+"px"}}>Class</div>
            <div className="s-bloc" style={{height: val+"px", marginTop: val5+"px"}}>Skip</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;