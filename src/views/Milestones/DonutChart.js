import React from 'react';
import './DonutChart.css';

class DonutChart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value:0,
      valuelabel:'Completed',
      size: 175,
      strokewidth: 5
    }
  }
  
  render() {
    const halfsize = (this.state.size * 0.5);
    const radius = halfsize - (this.state.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval1 = ((this.props.value * circumference) / 100);
    const strokeval2 = ((this.props.value2 * circumference) / 100);
    const strokeval3 = ((this.props.value3 * circumference) / 100);
    const dashval1 = (strokeval1 + ' ' + circumference);
    const dashval2 = (strokeval2 + ' ' + circumference);
    const dashval3 = (strokeval3 + ' ' + circumference);

    const trackstyle = {strokeWidth: this.state.strokewidth};
    const indicatorstyle1 = {strokeWidth: this.state.strokewidth, strokeDasharray: dashval1};
    const indicatorstyle2 = {strokeWidth: this.state.strokewidth, strokeDasharray: dashval2};
    const indicatorstyle3 = {strokeWidth: this.state.strokewidth, strokeDasharray: dashval3};
    
    const rotateDiff1 = (this.props.value/100) * 360 - 90;
    const rotateDiff2 = ((this.props.value+this.props.value2)/100) * 360 - 90;
    const rotateval1 = 'rotate(-90 '+halfsize+','+halfsize+')';
    const rotateval2 = 'rotate('+rotateDiff1+' '+halfsize+','+halfsize+')';
    const rotateval3 = 'rotate('+rotateDiff2+' '+halfsize+','+halfsize+')';

    return (
      <svg width={this.state.size} height={this.state.size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval1} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval1} style={indicatorstyle1} className="donutchart-indicator1"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval2} style={indicatorstyle2} className="donutchart-indicator2"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval3} style={indicatorstyle3} className="donutchart-indicator3"/>
        
        <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
          <tspan className="donutchart-text-val">{this.props.value}</tspan>
          <tspan className="donutchart-text-percent">/100</tspan>
          <tspan className="donutchart-text-label" x={halfsize} y={halfsize+20}>{this.state.valuelabel}</tspan>
        </text>
      </svg>
    );
  }
}

export default DonutChart;