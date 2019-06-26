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
        <div class="dataSetEg">Average income, by year, by country, by geographic region</div>
        {this.props.slide === 7 && <div class="forEg">Average income in Argentina in 1986 was $9026<br/>Argentina is in the Americas</div>}
      </div>
    );
  }
} 

export default Slide25;