import React from 'react';
import './Slide6.css';
import Utils from '../../services/Utils';

class Slide6 extends React.Component {
  now = new Date();
  interval;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
        var c1 = document.getElementById('chart1');
        var lineChart = new Utils.tsiClient.ux.LineChart(c1);
        var render = () => {
          var cc1 = document.getElementById('chartCard1');
          if(cc1){
            cc1.style.opacity = 1;
          }
          lineChart.render(this.randomData(), {legend: 'compact'});
        }
        setTimeout(render, 1000);
        this.interval = setInterval(render, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  randomData = () => {
    var data = [];
    for(var i = 0; i < Math.ceil(Math.random() * 4); i++){
      var seriesData = {};
      var groupData = {[`Group${i}`]: seriesData}
      data.push(groupData);
      for(var j = 0; j < Math.ceil(Math.random() * 5); j++){
        var thisSeriesData = {};
        seriesData['Series' + j] = thisSeriesData;
        for(var k = 0; k < 80; k++){
          thisSeriesData[(new Date(this.now.valueOf() + k*1000*60)).toISOString()] = {value: Math.random() * 20};
        }
      }
    }
    return data;
  }

  render() {
    return (
      <div className={`slide ${this.props.className} slide6`}>
        <h1>Benefit #2: Idempotent Renders</h1>
        <h3>When data changes, just call lineChart.render(data) with new data</h3>
        <div style={{opacity: 0}} id="chartCard1" className="chartCard">
          <div className="ccTitle">Random Data, Gracefully Transitioning While it Changes</div>
          <div id="chart1" className="chart"></div>
        </div>
      </div>
    );
  }
} 

export default Slide6;