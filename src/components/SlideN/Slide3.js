import React from 'react';
import './Slide3.css';

class Slide3 extends React.Component {
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
        <h1>Slide 3 might have something shiny</h1>
      </div>
    );
  }
} 

export default Slide3;