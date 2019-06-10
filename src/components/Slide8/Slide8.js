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
        <h1>Other cool stuff...</h1>
        <h2>I made a custom camper van</h2>
        <div className="pics">
        <img alt="" src="./van.jpeg"></img>
        <img alt="" src="./van2.jpeg"></img>
        </div>
      </div>
    );
  }
} 

export default Slide8;