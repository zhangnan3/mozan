import React, { Component } from 'react';
// import logo from './logo.svg';
import Main from'../Main/Main'
import Slider from'../Slider/Slider'


class Home extends Component {

  render() {
    return (
      <div className="home">
          <Slider />
          <Main/>
       </div>

     )
   }
 }
export default Home
