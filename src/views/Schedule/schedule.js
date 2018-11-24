import React, { Component } from 'react';
import { connect } from 'react-redux';
import './schedule.css';

const mapStateToProps = state => ({
  schedule: state.schedule.schedule
});

const mapDispatchToProps = dispatch => ({
  onLogin: (ext_id, accessToken) =>
    dispatch({ type: 'LOGIN', ext_id, accessToken })
});

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { hours: [], events: [] };
    this.timeLoop = this.timeLoop.bind(this);
    this.eventLoop = this.eventLoop.bind(this);
    this.initializeView = this.initializeView.bind(this);
  }

  timeLoop() {
    let newHours = []
    for(let i = this.props.schedule[0].startHour; i <= this.props.schedule[this.props.schedule.length-1].endHour; i++) {
      if(i <= 12)
        newHours.push(<div className="s-time" key={"hour"+i}>{i}</div>);
      else
        newHours.push(<div className="s-time" key={"hour"+i}>{i-12}</div>);
    }
    return newHours;
  }

  eventLoop() {
    let newEvents = [];
    let startTime = this.props.schedule[0].startHour;
    let hourDiff = 0, minDiff = 0, eventHeight = 0, eventOffest = 0;
    for(let i = 0; i < this.props.schedule.length; i++) {
      hourDiff = this.props.schedule[i].endHour - this.props.schedule[i].startHour;
      minDiff = hourDiff*60 + this.props.schedule[i].endMin - this.props.schedule[i].startMin; 
      eventHeight = minDiff*3; // 3px per minute
      hourDiff = this.props.schedule[i].startHour - startTime;
      minDiff = hourDiff*60 + this.props.schedule[i].startMin;
      eventOffest = minDiff*3;
      newEvents.push(<div className="s-bloc" style={{height: eventHeight+"px", marginTop: eventOffest+"px"}} key={'events'+i}>{this.props.schedule[i].title}</div>);
    }
    return newEvents;
  }

  initializeView() {
    this.setState({ hours: this.timeLoop(), events: this.eventLoop() });
  }

  componentWillMount() {
    this.initializeView();
  }

  render() {
    return (
      <div className="schedule">
        <div className="s-date box-flexRowCenter"><div>Monday, October 1</div></div>
        <div className="s-add"><i className="ion-ios-add"></i></div>
        <div className="s-list">
          <div className="s-timelist">
            {
              this.state.hours.map(hour => {
                return hour;
              })
            }
          </div>
          <div className="s-bloclist">
            {
              this.state.events.map(event => {
                return event;
              })
            }
          </div>
        </div>
        <div className="s-spacer"></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);