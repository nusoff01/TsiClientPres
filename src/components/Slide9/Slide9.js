import React from 'react';
import Utils from '../../services/Utils'; 
import './Slide9.css';

class Slide9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: 'line chart'
    };
  }


  componentDidMount() {
    var pr = window.PR;
    pr.prettyPrint();
    var then = () => setTimeout(() => {
          
            var c1 = document.getElementById('chart1');
            if(c1){
                c1.innerHTML = '';
            }
          
            let chart = new Utils.tsiClient.ux.LineChart(c1);          
            chart.render(Utils.data, {legend: 'compact', scaledToCurrentTime: true, tooltip: true, xAxisTimeFormat: () => 'YYYY', isTemporal: false, spMeasures: ['Income', 'LifeExpectancy', 'Population'], grid: true});
    });
    Utils.initData(then); 
  }

  render() {
    return (<div className={`slide ${this.props.className} slide9`}>
      <h1>A cool thing we did for accessibility: grid mode</h1>
      <div id='chart1'></div>
      <h3 className="exampleText">Example cell label - "Cell in row 6, column 5. Row is labeled Bahrain in column named 1970-01-01T05:00:00.000Z with values Income, 16484.34, LifeExpectancy, 61.66, Population, 219543"</h3>
    </div>);
  }
 

} 

export default Slide9;