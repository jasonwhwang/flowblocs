import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class AHandler extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.checkRemove = this.checkRemove.bind(this);
  }
  onUpdate(event) {
    this.props.update(event, this.props.index);
  }

  checkRemove() {
    if(this.props.item === "")
      this.props.remove();
  }

  render() {
    return (
      <TextareaAutosize className="box-spacer" value={this.props.item} onChange={this.onUpdate} onBlur={this.checkRemove}></TextareaAutosize>
    );
  }
}

export default AHandler;