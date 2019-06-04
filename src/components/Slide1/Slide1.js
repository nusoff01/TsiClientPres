import React from 'react';

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
    return (
      <div className={`slide ${this.props.className}`}>
        <h1>An opinionated talk about json shapes</h1>
      </div>
    );
  }
} 

export default Slide1;