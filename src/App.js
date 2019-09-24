import React from 'react';
import './App.css';
import Slide1 from './components/Slide1/Slide1';
import Slide2 from './components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';
import Slide4 from './components/Slide4/Slide4';
import Slide5 from './components/Slide5/Slide5';
import Slide6 from './components/Slide6/Slide6';
import Slide7 from './components/Slide7/Slide7';
import Slide8 from './components/Slide8/Slide8';
import Slide9 from './components/Slide9/Slide9';
import Slide25 from './components/Slide25/Slide25';
import Slide75 from './components/Slide75/Slide75';

class App extends React.Component {
  MAX_SLIDES = 21;
  GRID_SLIDE = 17;
  constructor(props) {
    super(props);
    this.state = {slide: (window.location.hash ? Number(window.location.hash.substring(1)) : 1), direction: 'right'};
    window.addEventListener('keyup', event => {
      if(event.which === 37 && this.state.slide > 1 && this.state.slide !== this.GRID_SLIDE){
        this.changeSlide(false);
      }
      if(event.which === 39 && this.state.slide !== this.GRID_SLIDE){
        this.changeSlide();
      }
    })
  }

  changeSlide(increment = true, override = null){
    if (override !== null) {
      this.setState({slide: override, direction: (override > this.state.slide) ? 'right' : 'left'})
    } else {
      this.setState({slide: this.state.slide + (increment ? 1 : -1), direction: increment ? 'right' : 'left'});
    }
    window.location.hash = this.state.slide;
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='slideshow'>
        {this.getSlide()}
        <div className='forwardBack'>
          <button className='back' disabled={this.state.slide === 1} onClick={() => this.changeSlide(false)}></button>
          <div className='progress'>{this.state.slide}/{this.MAX_SLIDES}</div>
          <button className='forward' disabled={this.state.slide === this.MAX_SLIDES} onClick={() => this.changeSlide()}></button>
        </div>
      </div>
    );
  }

  getSlide(){
    switch(this.state.slide){
      case 1:
        return <Slide1 className={`from${this.state.direction}`}></Slide1>;
      case 2:
        return <Slide3 slide={this.state.slide}  className={`from${this.state.direction}`} jumpToSlide={(slide) => {this.changeSlide(true, slide)}}></Slide3>;
      case 3:
        return <Slide3 slide={this.state.slide}  className={`from${this.state.direction}`} jumpToSlide={(slide) => {this.changeSlide(true, slide)}}></Slide3>;
      case 4:
        return <Slide3 slide={this.state.slide}  className={`from${this.state.direction}`} jumpToSlide={(slide) => {this.changeSlide(true, slide)}}></Slide3>;
      case 5:
          return <Slide25 className={`from${this.state.direction}`}></Slide25>;
      case 6:
          return <Slide25 slide={this.state.slide} className={`from${this.state.direction}`}></Slide25>;
      case 7:
        return <Slide4 className={`from${this.state.direction}`}></Slide4>;    
      case 8:
        return <Slide4 slide={this.state.slide} className={`from${this.state.direction}`}></Slide4>;    
      case 9:
        return <Slide5 className={`from${this.state.direction}`}></Slide5>;    
      case 10:
        return <Slide5 slide={this.state.slide} className={`from${this.state.direction}`}></Slide5>;    
      case 11:
        return <Slide7 className={`from${this.state.direction}`}></Slide7>;    
      case 12:
        return <Slide6 className={`from${this.state.direction}`}></Slide6>;    
      case 13:
        return <Slide75 className={`from${this.state.direction}`}></Slide75>;    
      case 14:
          return <Slide8 className={`from${this.state.direction}`}></Slide8>;    
      case 15:
          return <Slide8 slide={this.state.slide} className={`from${this.state.direction}`}></Slide8>;   
      case 16:
          return <Slide8 slide={this.state.slide} className={`from${this.state.direction}`}></Slide8>;  
      case 17:
          return <Slide9 slide={this.state.slide} className={`from${this.state.direction}`}></Slide9>;   
      case 18:
          return <Slide2 slide={this.state.slide} className={`from${this.state.direction}`} ></Slide2>;
      case 19:
        return <Slide2 slide={this.state.slide} className={`from${this.state.direction}`}></Slide2>;
      case 20:
        return <Slide2 slide={this.state.slide} className={`from${this.state.direction}`}></Slide2>;
      case 21:
        return <Slide2 slide={this.state.slide} className={`from${this.state.direction}`}></Slide2>;
      default:
        return '';
    }
  }
} 

export default App;