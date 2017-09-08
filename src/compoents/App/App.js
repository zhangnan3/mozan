import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from'../Header/Header'
import Footer from'../Footer/Footer'
import Shang from'../Shang/Shang'
import Car from'../Car/Car'
class App extends Component {
  render (){
    return(
      <div className='app'>
        <Header />
         <Car />
        <Footer/>
      </div>
    )
  }
}
export default App
