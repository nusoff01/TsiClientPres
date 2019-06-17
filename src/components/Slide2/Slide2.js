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
        <h1>Hi, I'm Matt</h1>
        <div className='content'>
          {this.props.slide >= 3 && <div className='first'>
            <h3>Why I'm here?</h3>
            <ul>
              <li>To discuss a JSON shape for visualization, and a couple cool results</li>
            </ul>
          </div>}
          {this.props.slide >= 4 && 
          <div className='second'>
          <h3>Yeah...but why?</h3>
          <ul>
            <li>My team distributes a JS library of data visualization components</li>
            <li>It's called <a target="_blank" rel="noopener noreferrer" href="https://github.com/microsoft/tsiclient">tsiclient</a></li>
            <li>The library consumes this specific shape</li>
          </ul>
          </div>
          }
          {this.props.slide >= 5 && 
          <div className='third'>
          <h3>thank u, next</h3>
          <ul>
            <li>I also made a dope custom camper van (not covered here)</li>
          </ul>
          </div>
          }
        </div>
        <div className={"hs " + (this.props.slide===2 ? 'lefter' : '')}>
          <img alt="" src="./headshot.PNG"></img>
          <div className="cap">Me</div>
        </div>
        <div className={"hs hs2 " + (this.props.slide===2 ? 'lefter' : '')}>
          <img alt="" src="./bitmoji.PNG"></img>
          <div className="cap">Also Me</div>
        </div>
      </div>
    );
  }
} 

export default Slide2;