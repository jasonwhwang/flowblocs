import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class SModalHandler extends React.Component {
  constructor(props) {
    super(props);
    this.handleIHandler = this.handleIHandler.bind(this);
  }

  handleIHandler(event) {
    this.props.handler(event, this.props.idx);
  }

  render() {
    if(this.props.inputType === 0) {
      return(
        <input className="s-input" placeholder={this.props.placeHolder} value={this.props.val} onChange={this.handleIHandler}></input>
      );
    } else if(this.props.inputType === 1) {
      return (
        <input className="s-inputSmall" type={this.props.placeHolder} value={this.props.val} onChange={this.handleIHandler}></input>
      );
    } else if(this.props.inputType === 2) {
      return (
        <TextareaAutosize className="s-input box-marginTop s-textArea" placeholder={this.props.placeHolder} rows={3} value={this.props.val} onChange={this.handleIHandler}></TextareaAutosize>
      );
    }
  }
}

export default SModalHandler;