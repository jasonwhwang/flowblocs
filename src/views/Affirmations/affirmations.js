import React, { Component } from 'react';
import { connect } from 'react-redux';

import AHandler from './aHandler';

import './affirmations.css';

const mapStateToProps = state => ({
  list: state.affirmations.list
});

const mapDispatchToProps = dispatch => ({
  onLogin: (ext_id, accessToken) =>
    dispatch({ type: 'LOGIN', ext_id, accessToken })
});

class Affirmations extends Component {
  constructor(props) {
    super(props);
    this.state = { list: this.props.list };
    this.handleEvent = this.handleEvent.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleEvent(event, index) {
    let newList = this.state.list;
    newList[index] = event.target.value;
    this.setState({ list: newList });
  }

  addItem() {
    this.setState({ list: [...this.state.list, ''] });
  }

  removeItem() {
    const filteredList = this.state.list.filter(name => {
      return name !== "";
    });
    this.setState({ list: filteredList });
  }

  render() {
    return (
      <div className="affirmations">
        <div className="affirmations-page">
          {
            this.state.list ?
              this.state.list.map((item, index) => (
                <div className="a-entry" key={'item'+index}>
                  <div className="a-block a-blockn">{index+1}.</div><AHandler update={this.handleEvent} remove={this.removeItem} index={index} item={item} />
                </div>
              ))
              :
              null
          }

          <div className="a-filler" onClick={this.addItem}></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Affirmations);