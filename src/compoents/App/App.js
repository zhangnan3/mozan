import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from'../Header/Header'
import Footer from'../Footer/Footer'
import Main from'../Main/Main'
import Shang from'../Shang/Shang'
import Car from'../Car/Car'
import List from'../List/List'
import Wei from'../Wei/Wei'
class App extends Component {
  render (){
    return(
      <div className='app'>
        <Header />

         <Shang />
        <Footer/>
      </div>
    )
  }
}
export default App
