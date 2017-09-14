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
import Ding from '../Ding/Ding'
import Finsh from '../Finsh/Finsh'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
class App extends Component {
  render (){
    return(
      <Router>
      <div className='app'>
        <Header />
          <Route exact path='/' component={Main}/>
          <Route path='/shang' component={Shang}/>
          <Route path='/Car' component={Car}/>
          <Route path='/List' component={List}/>
         <Route path='/Ding' component={Ding}/>
          <Route path='/Wei' component={Wei}/>
          <Route path='/Finsh' component={Finsh}/>
          <Route exact path='/Main' component={Main}/>

        <Footer/>
      </div>
    </Router>
    )
  }
}
export default App
