import React, { Component } from 'react';
import './App.css';
import config from './config/config';

class App extends Component {
  constructor(props) {
    super(props);

    const today = new Date();
    this.state = {
      time: `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`
    }
  }

  componentDidMount() {
    setInterval(() => {
      const today = new Date();
      let time = {
        s: today.getSeconds(),
        m: today.getMinutes(),
        h: today.getHours()
      };

      if(today.getHours() < 10){
        time.h = `0${today.getHours()}`;
      }
      if(today.getMinutes() < 10){
        time.m = `0${today.getMinutes()}`;
      }
      if(today.getSeconds() < 10){
        time.s = `0${today.getSeconds()}`;
      }
      
      this.setState({
        time: `${time.h} : ${time.m} : ${time.s}`
      });  
    }, 1000);
    
  }

  render() {
    return(
      <div class={config.dark ? 'dark container':'white container'}>
        {this.state.time}
      </div>
    );
  }
}

export default App;
