import React from 'react';

class ScheduleHandler extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.props.toggle(event, this.props.idx);
  }

  render() {
    return(
      <div className="s-bloc" onClick={this.handleToggle}
        style={{ height: this.props.height, marginTop: this.props.offset }}
        >{this.props.title}</div>
    );
  }
}

export default ScheduleHandler;