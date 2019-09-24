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

        <h1>TsiClient</h1>
        <div className='subHeader'>Origin story tldr: Needed charts for analytics tool, instead of just building charts, built a highly-extendable charting library </div>
        <div className='subHeader'>Built on d3.js, completely self contained (no dependencies) </div>
        {this.props.slide > 2 && <h2 className='adventureText'>Choose your own adventure - pick one of three option to learn more about how we built TsiClient or how it's put to use today</h2>}
        {this.props.slide > 3 && <div className='slidingScale'>
          <div className='boring'>&#8592; Technical 🤓</div>
          <div className='cool'>🌄 Pretty charts &#8594;</div>
        </div>}
        {this.props.slide > 3 && <div className='explorationOptions'>
          <div className='explorationOption'>
            <h2>The shape of the data</h2>
            <div>why it's important to pick the right one, and how shape influences usage and functionality</div>
            <button onClick={() => this.props.jumpToSlide(5)}>Go!</button>
          </div>
          <div className='explorationOption'>
            <h2>Accessibility and availability</h2>
            <div>building with Open Source/public npm package in mind, as well as in a manner that is inclusive to all our users</div>
            <button onClick={() => this.props.jumpToSlide(14)}>Go!</button>
          </div>
          <div className='explorationOption'>
            <h2>Usage out in the world</h2>
            <div>See the charting library in action! Within our own product, and in the wild</div>
            <button onClick={() => this.props.jumpToSlide(7)}>Go!</button>
          </div>
        </div>}
      </div>
    );
  }
} 

export default Slide3;