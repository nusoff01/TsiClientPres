import React from 'react';
import './App.css';
import Slide1 from './components/Slide1/Slide1'
import Slide2 from './components/Slide2/Slide2'
import Slide3 from './components/Slide3/Slide3'
import Slide4 from './components/Slide4/Slide4'
import Slide5 from './components/Slide5/Slide5'
import Slide6 from './components/Slide6/Slide6'
import Slide7 from './components/Slide7/Slide7'
import Slide8 from './components/Slide8/Slide8'

class App extends React.Component {
  MAX_SLIDES = 8;
  constructor(props) {
    super(props);
    this.state = {slide: (window.location.hash ? Number(window.location.hash.substring(1)) : 1), direction: 'right'};
    window.addEventListener('keyup', event => {
      if(event.which === 37 && this.state.slide > 1){
        this.changeSlide(false);
      }
      if(event.which === 39 && this.state.slide < this.MAX_SLIDES){
        this.changeSlide();
      }
    })
  }

  changeSlide(increment = true){
    this.setState({slide: this.state.slide + (increment ? 1 : -1), direction: increment ? 'right' : 'left'});
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
          return <Slide2 className={`from${this.state.direction}`}></Slide2>;
      case 3:
          return <Slide3 className={`from${this.state.direction}`}></Slide3>;
      case 4:
        return <Slide4 className={`from${this.state.direction}`}></Slide4>;    
      case 5:
        return <Slide5 className={`from${this.state.direction}`}></Slide5>;    
      case 6:
        return <Slide7 className={`from${this.state.direction}`}></Slide7>;    
      case 7:
        return <Slide6 className={`from${this.state.direction}`}></Slide6>;    
      case 8:
          return <Slide8 className={`from${this.state.direction}`}></Slide8>;    
      default:
        return '';
    }
  }
} 

export default App;