import React, { Component } from 'react';
import { connect } from 'react-redux';
import './time.css';

import { FlowBlocItem } from './timestatus';

const mapStateToProps = state => ({
  token: state.common,
  timestart: state.common.timestart
});

const mapDispatchToProps = dispatch => ({
  onLogin: (ext_id, accessToken) =>
    dispatch({ type: 'LOGIN', ext_id, accessToken })
});

class Time extends Component {
  render() {
    return (
      <div className="time">
        <div className="time-clock">
          <div className="time-time">9:00</div>
          <div className="box-heading2">Monday, October 1</div>
        </div>
        <div className="t-bottom">
          <FlowBlocItem />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);