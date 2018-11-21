import React, { Component } from 'react';
import './affirmations.css';

class Affirmations extends Component {
  render() {
    return (
      <div className="affirmations">
        <div className="affirmations-page">
          <div className="a-entry">
            <div className="a-block a-blockn">1.</div> <div className="a-block a-blockw">I am happy</div>
          </div>
          <div className="a-entry">
            <div className="a-block a-blockn">2.</div> <div className="a-block a-blockw">I will enjoy everyday of my life</div>
          </div>
          <div className="a-entry">
            <div className="a-block a-blockn">3.</div> <div className="a-block a-blockw">I win everyday</div>
          </div>
          <div className="a-entry">
            <div className="a-block a-blockn">4.</div> <div className="a-block a-blockw">I take massive action</div>
          </div>
          <div className="a-entry">
            <div className="a-block a-blockn">5.</div> <div className="a-block a-blockw">I will do whatever it takes</div>
          </div>

          <div>
            <input></input>
          </div>

          <div className="a-filler"></div>
          <div>
            <input></input>
          </div>

        </div>
      </div>
    );
  }
}

export default Affirmations;