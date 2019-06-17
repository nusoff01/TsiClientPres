import React from 'react';
import './Slide8.css';

class Slide8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={`slide ${this.props.className}`}>
        <h1>Oh yeah, this van...</h1>
        <div className="pics">
          <div className="leftPix">
        <img alt="" src="./van3.jpeg"></img>
        <img alt="" src="./van4.jpeg"></img>
        </div>
        <div className="rightPix">
        <img alt="" src="./van.jpeg"></img>
        <img alt="" src="./van2.jpeg"></img>
        </div>
        </div>
      </div>
    );
  }
} 

export default Slide8;