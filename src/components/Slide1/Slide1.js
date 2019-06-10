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
          <h1>A JSON Shape for Visualizing Time Series Data</h1>
          <h2>A really short talk</h2>
          <h3>by Matt Darsney</h3>
        </div>
      </div>
    );
  }
} 

export default Slide1;