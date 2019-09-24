import React from 'react';
import Utils from '../../services/Utils'; 
import './Slide8.css';

class Slide8 extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    return (<div className={`slide ${this.props.className} slide8`}>
      <h1>Building for as many users as possible</h1>
        <div className='content'>
        {this.props.slide > 14 && <div>
          <h2 className='sectionHeader'>Open Source and npm distributed: Expanding the developers who use the library</h2>
          <div className='contentSection'>
            <li>Open Source on github means consumers of the client can (and do!) file bugs and while referencing specific segments of code</li>
            <li>Npm allows consumers to easily manage the version and gives a stable version control system for public releases</li>
            <li>Easier adoption -> more end users -> really cool feature asks!</li>
            <li><a href='https://www.npmjs.com/package/tsiclient'>npm link</a> and <a href='https://github.com/Microsoft/TsiClient'>Github link</a></li>
            
            <div className='picturePanels'>
              <div className=' picturePanel'>
                <h3>NPM adoption</h3>
                <img src='npm.png' height='200'/>
              </div>
              <div className=' picturePanel'>
                <h3>Some example closed Github issues</h3>
                <img src='github.png' height='200'/>
              </div>
            </div>
          </div>
        </div>}
        {this.props.slide > 15 && <div> 
          <h2 className='sectionHeader'>Accessibility: Expanding the base of our end users</h2>
          <div className='contentSection'>
            <li>Using aria labels and correct tab order ensures visually impaired and limited mobility users are able to use the charts</li>
            <li>Using overridable keys for strings means that our charts can be adapted to different languages</li>
            <li>Also, we built a cool tool that converts a chart to a screen readable grid, more about that on the next slide...</li>
          </div>
        </div>}
      </div>

    </div>);
  }
 

} 

export default Slide8;