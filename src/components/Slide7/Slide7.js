import React from 'react';
import './Slide7.css';
import Utils from '../../services/Utils';

class Slide7 extends React.Component {
  now = new Date();
  interval;
  renderCount = 0;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var pr = window.PR;
    pr.prettyPrint();
    setTimeout(() => {
        var render = () => {
          var cc1 = document.getElementById('chartCard1');
          if(cc1){
            cc1.style.opacity = 1;
          }
          var c1 = document.getElementById('chart1');
          if(c1){
            c1.innerHTML = '';
          }
          var renderCountMod = this.renderCount % 4;
          var chart;
          switch(renderCountMod){
            case 0:
              chart = new Utils.tsiClient.ux.LineChart(c1);          
              break;
            case 1:
              chart = new Utils.tsiClient.ux.BarChart(c1);          
              break;
            case 2:
                chart = new Utils.tsiClient.ux.PieChart(c1);          
                break;
            // case 3:
            //     chart = new Utils.tsiClient.ux.Heatmap(c1);          
            //     break;                
            case 3:
                chart = new Utils.tsiClient.ux.ScatterPlot(c1);          
                break;
            default: 
              chart = new Utils.tsiClient.ux.LineChart(c1);          
              break;
          }
          chart.render(Utils.data, {tooltip: true, xAxisTimeFormat: () => 'YYYY', isTemporal: false, spMeasures: ['Income', 'LifeExpectancy', 'Population']});
          this.renderCount++;
        }
        setTimeout(render, 1000);
        this.interval = setInterval(render, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={`slide ${this.props.className} slide7`}>
        <h1>Benefit #1: Universal Data Shape</h1>
        <h3>Regardless of chart type, this shape works</h3>
        <pre className="prettyprint lang-js">lineChart.render(data); barChart.render(data); pieChart.render(data); scatterPlot.render(data);</pre>
        <div style={{opacity: 0}} id="chartCard1" className="chartCard">
          <div className="ccTitle">Average Income by Year, Country, Region</div>
          <div id="chart1" className="chart"></div>
        </div>
      </div>
    );
  }
} 

export default Slide7;