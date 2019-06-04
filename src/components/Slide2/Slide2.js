import React from 'react';

class Slide2 extends React.Component {
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
        <h1>This is slide 2</h1>
      </div>
    );
  }
} 

export default Slide2;