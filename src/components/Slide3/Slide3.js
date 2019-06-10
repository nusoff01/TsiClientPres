import React from 'react';
import './Slide3.css';
import Utils from '../../services/Utils';


class Slide3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var then = () => {
      setTimeout(() => {
        var cc1 = document.getElementById('chartCard1');
        if(cc1){
          cc1.style.opacity = 1;
        }
        var c1 = document.getElementById('chart1');
        if(c1){
          var lineChart = new Utils.tsiClient.ux.LineChart(c1);
          lineChart.render(Utils.data, {tooltip: true, xAxisTimeFormat: () => 'YYYY'});
        }
      }, 500);
    }
    Utils.initData(then);
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={`slide slide3 ${this.props.className}`}>
        <h1>Here's a line chart...</h1>
        <div style={{opacity: 0}} id="chartCard1" className="chartCard">
          <div className="ccTitle">Average Income by Year, Country, Region</div>
          <div id="chart1" className="chart"></div>
        </div>
      </div>
    );
  }
} 

export default Slide3;