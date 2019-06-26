import React from 'react';
import './Slide75.css';

class Slide75 extends React.Component {
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
      <div className={`slide ${this.props.className} slide75`}>
        <h1>Today I Learned...</h1>
        <div>CSV == 😿</div>
        <div>JSON == 🧐😻</div>
      </div>
    );
  }
} 

export default Slide75;