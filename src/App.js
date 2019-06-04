import React from 'react';
import './App.css';
import Slide1 from './components/Slide1/Slide1'
import Slide2 from './components/Slide2/Slide2'
import Slide3 from './components/Slide3/Slide3'


class App extends React.Component {
  MAX_SLIDES = 3;
  constructor(props) {
    super(props);
    this.state = {slide: 1, direction: 'right'};
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
          <button className='forward' disabled={this.state.slide === this.MAX_SLIDES} onClick={this.changeSlide}></button>
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
      default:
        return '';
    }
  }
} 

export default App;