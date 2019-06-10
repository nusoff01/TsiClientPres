import React from 'react';
import './Slide2.css';

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
      <div className={`slide ${this.props.className} slide2`}>
        <h1>Hi I'm Matt, here's some things...</h1>
        <div className='content'>
          <h3>About me</h3>
          <ul>
            <li>Wrote hacky JavaScript the last 6 years</li>
            <li>Tried incubating a bunch of bad ideas at Microsoft</li>
            <li>One idea (Time Series Insights) is sort of working!</li>
          </ul>
          <h3>What else?</h3>
          <ul>
            <li>My team distributes a JS library of data visualization components</li>
            <li>It's called <a target="_blank" rel="noopener noreferrer" href="https://github.com/microsoft/tsiclient">tsiclient</a></li>
          </ul>
          <h3>Why I'm here?</h3>
          <ul>
            <li>To discuss a JSON shape for visualization, and a few cool results</li>
          </ul>
        </div>
      </div>
    );
  }
} 

export default Slide2;