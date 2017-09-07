import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from'../Header/Header'
import Main from'../Main/Main'
import Footer from'../Footer/Footer'

class App extends Component {
  render (){
    return(
      <div className='app'>
        <Header />
        <Main/>
        <Footer/>
      </div>
    )
  }
}
export default App
