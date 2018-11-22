import React, { Component } from 'react';
import './affirmations.css';

const autoExpand = (textarea) => {
  var limitRows = 5;
  var messageLastScrollHeight = textarea.scrollHeight;

  textarea.oninput = function () {
    var rows = parseInt(textarea.getAttribute("rows"));
    // If we don't decrease the amount of rows, the scrollHeight would show the scrollHeight for all the rows
    // even if there is no text.
    textarea.setAttribute("rows", "1");

    if (rows < limitRows && textarea.scrollHeight > messageLastScrollHeight) {
      rows++;
    } else if (rows > 1 && textarea.scrollHeight < messageLastScrollHeight) {
      rows--;
    }

    messageLastScrollHeight = textarea.scrollHeight;
    textarea.setAttribute("rows", rows);
  };
};

class Affirmations extends Component {
  constructor(props) {
    super(props);
    this.inputExpand = this.inputExpand.bind(this);
  }

  inputExpand() {
    document.addEventListener('input', function (event) {
      if (event.target.tagName.toLowerCase() !== 'textarea') return;
      autoExpand(event.target);
    }, false);
  }

  render() {
    this.inputExpand();
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
            <textarea rows="1"></textarea>
          </div>

          <div className="a-filler"></div>

          <div>
            <textarea rows="1"></textarea>
          </div>

        </div>
      </div>
    );
  }
}

export default Affirmations;