import React from 'react';
import './Slide25.css';

class Slide25 extends React.Component {
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
      <div className={`slide ${this.props.className} slide25`}>
        <h1>Consider this data set...</h1>
        <div>Average income, by year, by country, by geographic region</div>
      </div>
    );
  }
} 

export default Slide25;