import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.initializeVh = this.initializeVh.bind(this);
  }

  initializeVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  render() {
    this.initializeVh();
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
