import React, { Component } from 'react';
import { connect } from 'react-redux';
import './schedule.css';

import ScheduleModal from './scheduleModal';
import ScheduleHandler from './sHandler';

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
    this.state = { hours: [], events: [], add: 0, currEvent: 0 };
    this.timeLoop = this.timeLoop.bind(this);
    this.eventLoop = this.eventLoop.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  timeLoop() {
    let newHours = []
    for (let i = this.props.schedule[0].startHour; i <= this.props.schedule[this.props.schedule.length - 1].endHour; i++) {
      if (i <= 12)
        newHours.push(<div className="s-time" key={"hour" + i}>{i}</div>);
      else
        newHours.push(<div className="s-time" key={"hour" + i}>{i - 12}</div>);
    }
    return newHours;
  }

  eventLoop() {
    let newEvents = [];
    let startTime = this.props.schedule[0].startHour;
    let hourDiff = 0, minDiff = 0, eventHeight = 0, eventOffest = 0;
    for (let i = 0; i < this.props.schedule.length; i++) {
      hourDiff = this.props.schedule[i].endHour - this.props.schedule[i].startHour;
      minDiff = hourDiff * 60 + this.props.schedule[i].endMin - this.props.schedule[i].startMin;
      eventHeight = minDiff * 3; // 3px per minute
      hourDiff = this.props.schedule[i].startHour - startTime;
      minDiff = hourDiff * 60 + this.props.schedule[i].startMin;
      eventOffest = minDiff * 3;
      newEvents.push(
        <ScheduleHandler
          toggle={this.toggleModal}
          height={eventHeight + "px"}
          offset={eventOffest + "px"}
          key={'events' + i}
          idx={i}
          title={this.props.schedule[i].title} />);
    }
    return newEvents;
  }

  toggleModal(event, idx) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      if (this.state.add === 0) {
        document.getElementById("schedule").style.overflow = "hidden";
        if (typeof idx !== 'undefined')
          this.setState({ ...this.state, add: 1, currEvent: this.props.schedule[idx] });
        else
          this.setState({ ...this.state, add: 1 });
      } else {
        document.getElementById("schedule").style.overflow = "auto";
        this.setState({ ...this.state, add: 0, currEvent: -1 })
      }
    }

  }

  componentWillMount() {
    this.setState({ hours: this.timeLoop(), events: this.eventLoop(), add: 0 });
  }

  render() {
    return (
      <div className="schedule" id="schedule">
        {
          this.state.add ? <ScheduleModal close={this.toggleModal} event={this.state.currEvent} /> : null
        }
        <div className="s-scheduleWrapper">
          <button className="s-date box-flexRowCenter"><div>Monday, October 1</div></button>
          <button className="s-add box-flexRowCenter" onClick={this.toggleModal}><i className="ion-ios-add" onClick={this.toggleModal}></i></button>
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
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);