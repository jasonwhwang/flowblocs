import React, { Component } from 'react';
import { connect } from 'react-redux';
import './time.css';

import { FlowBlocItem } from './timestatus';

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const mapStateToProps = state => ({
  token: state.common
});

const mapDispatchToProps = dispatch => ({
  onLogin: (ext_id, accessToken) =>
    dispatch({ type: 'LOGIN', ext_id, accessToken })
});

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { time: '', date: '' };
    this.currentTime = this.currentTime.bind(this);
  }

  currentTime() {
    let now = new Date();
    let time = now.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).replace(/(:\d{2}| [AP]M)$/, "");
    let day = days[now.getDay()];
    let month = months[ now.getMonth() ];
    let date = day + ', ' + month + ' ' + now.getDate();
    this.setState({ time: time, date: date });
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <div className="time">
        <div className="time-clock">
          <div className="time-time">{this.state.time}</div>
          <div className="box-heading2">{this.state.date}</div>
        </div>
        <div className="t-bottom">
          <FlowBlocItem />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);