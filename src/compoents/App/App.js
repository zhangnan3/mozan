import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from'../Header/Header'
import Footer from'../Footer/Footer'
import Shang from'../Shang/Shang'
import Car from'../Car/Car'
import Down from'../Down/Down'
import List from'../List/List'
class App extends Component {
  render (){
    return(
      <div className='app'>
        <Header />
         <List />
        <Footer/>
      </div>
    )
  }
}
export default App
