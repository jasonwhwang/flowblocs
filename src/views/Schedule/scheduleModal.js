import React from 'react';

import SModalHandler from './smodalHandler';

class ScheduleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: ['', '', '', '', '', '', ''], startT: 0, endT: 0, weekly: 0, notification: 0 }
    this.inputHandler = this.inputHandler.bind(this);
    this.handleStartT = this.handleStartT.bind(this);
    this.handleEndT = this.handleEndT.bind(this);
    this.handleWeekly = this.handleWeekly.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
  }

  inputHandler(event, idx) {
    let newInput = this.state.input;
    newInput[idx] = event.target.value;
    this.setState({ ...this.state, input: newInput });
  }

  handleStartT() {
    this.setState({ ...this.state, startT: !this.state.startT});
  }
  handleEndT() {
    this.setState({ ...this.state, endT: !this.state.endT});
  }
  handleWeekly() {
    this.setState({ ...this.state, weekly: !this.state.weekly });
  }
  handleNotification() {
    this.setState({ ...this.state, notification: !this.state.notification });
  }

  componentWillMount() {
    if(this.props.event) {
      this.setState({
        input:
          [this.props.event.title,
           this.props.event.startHour < 13 ? this.props.event.startHour+"" : this.props.event.startHour - 12 +"",
           this.props.event.startMin < 10 ? "0"+this.props.event.startMin : this.props.event.startMin+"",
           this.props.event.endHour < 13 ? this.props.event.endHour+"" : this.props.event.endHour - 12 +"",
           this.props.event.endMin < 10 ? "0"+this.props.event.endMin : this.props.event.endMin+"",
           this.props.event.location,
           this.props.event.description],
        startT: this.props.event.startHour < 13 ? 0 : 1,
        endT: this.props.event.endHour < 13 ? 0 : 1,
        weekly: this.props.event.weekly,
        notification: this.props.event.notification
      });
    }
  }

  render() {
    return(
      <div className="s-modal box-flexRowCenter" onClick={this.props.close}>
          <div className="s-modalContainer">
            <div className="s-typeToggle box-flexRowCenter">
              <div className="box-spacer s-typeToggleText"><div className="s-typeToggleBackgroundLeft box-flexRowCenter">Event</div></div>
              <div className="box-spacer s-typeToggleText"><div className="s-typeToggleBackgroundRight box-flexRowCenter">FlowBloc</div></div>
            </div>

            <SModalHandler inputType={0} placeHolder={"Title"} val={this.state.input[0]} idx={0} handler={this.inputHandler}/>

            <div className="box-flexRow box-marginTop s-spaceBetween">
              <div className="box-label s-smallWidth box-textCenter">Start</div>
              <SModalHandler inputType={1} placeHolder={"number"} val={this.state.input[1]} idx={1} handler={this.inputHandler}/>
              <div className="s-colon">:</div>
              <SModalHandler inputType={1} placeHolder={"number"} val={this.state.input[2]} idx={2} handler={this.inputHandler}/>
              <button className="s-smallWidth box-textBold" onClick={this.handleStartT}>{this.state.startT ? 'PM' : 'AM'}</button>
            </div>

            <div className="box-flexRow box-marginTop s-spaceBetween">
              <div className="box-label s-smallWidth box-textCenter">End</div>
              <SModalHandler inputType={1} placeHolder={"number"} val={this.state.input[3]} idx={3} handler={this.inputHandler}/>
              <div className="s-colon">:</div>
              <SModalHandler inputType={1} placeHolder={"number"} val={this.state.input[4]} idx={4} handler={this.inputHandler}/>
              <button className="s-smallWidth box-textBold" onClick={this.handleEndT}>{this.state.endT ? 'PM' : 'AM'}</button>
            </div>

            <SModalHandler inputType={0} placeHolder={"Location"} val={this.state.input[5]} idx={5} handler={this.inputHandler}/>

            <SModalHandler inputType={2} placeHolder={"Description"} val={this.state.input[6]} idx={6} handler={this.inputHandler}/>

            <div className="box-flexRow box-marginTop">
              {
                this.state.weekly ? 
                <button className="s-buttonSmall box-blue box-marginLeft" onClick={this.handleWeekly}><i className="ion-ios-calendar"/></button>
                :
                <button className="s-buttonSmall box-gray box-marginLeft" onClick={this.handleWeekly}><i className="ion-ios-calendar"/></button>
              }
              {
                this.state.notification ? 
                <button className="s-buttonSmall box-blue box-marginLeft" onClick={this.handleNotification}><i className="ion-ios-notifications"/></button>
                :
                <button className="s-buttonSmall box-gray box-marginLeft" onClick={this.handleNotification}><i className="ion-ios-notifications"/></button>
              }

              <div className="box-spacer"></div>
              <button className="s-buttonSmall box-red box-marginRight"><i className="ion-ios-trash"/></button>
            </div>

            <div className="box-spacer s-minHeight"></div>

            <div className="box-flexRow">
              <div className="box-spacer"></div>
              <button className="s-button box-blue s-save">Save</button>
            </div>

          </div>
        </div>
    );
  }
}

export default ScheduleModal;