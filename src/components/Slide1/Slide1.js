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
          <h4>(Brought to you by Time Series Insights - an Azure IoT team)</h4>
          <div className='s1Footer'>
            <h4>Slide deck by <a href='https://github.com/niusoff'>Nick Usoff</a> extended from a deck by <a href='https://github.com/darsney'>Matt Darsney</a>, library developed by <a href='https://github.com/microsoft/tsiclient/graphs/contributors'>Irem, Matt, Nick, and Corey</a></h4>
          </div>
        </div>
      </div>
    );
  }
} 

export default Slide1;