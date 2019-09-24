import React from 'react';
import './Slide1.css';
import Utils from '../../services/Utils';

class Slide1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    Utils.initData(() => {});
    return (
      <div className={`slide ${this.props.className} slide1`}>
        <div className='s1title'>
          <h1>Creating a Javascript Charting Library</h1>
          <h4>(AKA - what happens when Highcharts isn't good enough)</h4>
        </div>
      </div>
    );
  }
} 

export default Slide1;