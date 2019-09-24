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
        <h1>TsiClient in use</h1>

        <div className="s2Panels">
          {this.props.slide > 18 && <div className="panel panel1 fromRight">
            <div className='panelHeader'><a href='https://tsiclientsample.azurewebsites.net/'>TsiClient Sample Page</a></div>
            <div className='panelContent'>
              <img height='300' width='400' src='tsiClientSample.png'/>
              <div className='panelDescription'>The place we point when anyone wants to see how to see the charts in action! Self-contained examples that are easy to copy and build off of</div>
            </div>
          </div>}
          {this.props.slide > 19 && <div className="panel panel2 fromRight">
            <div className='panelHeader'><a href='https://t6dev.cloudapp.net/preview'>TSI Explorer</a></div>
            <div className='panelContent'>
              <img height='300' width='400' src='T7.png'/>
              <div className='panelDescription'>The original motivation for creating the library - our data historian product which uses a mashup of most of the charts to create an analytics tool</div>
            </div>
          </div>}
          {this.props.slide > 20 && <div className="panel panel3 fromRight">
            <div className='panelHeader'><a href='http://nusoff01.github.io/boston911/bostonScatter.html'>Boston 911 Call Data</a></div>
            <div className='panelContent'>
              <img height='300' width='400' src='boston911.png'/>
              <div className='panelDescription'>Just a fun use case that demonstrates two way binding of charts :)</div>

              <h4></h4>
            </div>
          </div>}
        </div>
        {this.props.slide > 20 && <h2 className='footer'>
            Takeaway - tailored for our product, but can drop into anything
          </h2>}
      </div>
    );
  }
} 

export default Slide2;