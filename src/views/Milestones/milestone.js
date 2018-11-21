import React from 'react';
import './milestone.css';

import DonutChart from './DonutChart';

class Mile extends React.Component {
  render() {
    return (
      <div className="m-milestoneHeight">
        <div className="m-lock">
          <i className="ion-ios-lock m-lock"></i>
        </div>

        <div className="m-textHeading">
          <div className="m-centertitle">Venture Capitalist</div>
          <div className="m-centerheading">by<span className="m-age">Age 35</span></div>
        </div>
        
        <div className="m-progressbarwrapper">
          <DonutChart value={25} value2={0} />
        </div>
      </div>
    );
  }
}

export default Mile;