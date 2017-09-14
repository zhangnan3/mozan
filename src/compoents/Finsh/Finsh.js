import React, { Component } from 'react';
// import logo from './logo.svg';
import './finsh.css';
import box1 from '../../images/finsh_03.jpg'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
class Finsh extends Component {
  render (){
    return(
      <Router>
      <div classNameName='finsh'>
      <div className="sec ">
          <div className="con ">
           <p>收银台</p>
           <ul>
            <li>购物车</li>
            <li>填写订单</li>
            <li>付款，购买成功</li>
           </ul>
         </div>
         <div className="finsh clearfix">

           <img className="box1" src={box1} alt=""/>
           <div className="finsh1">
               <div>
                  <p>支付成功！</p>
               </div>
               <div className="fin">
                   <h4>订单号：12364856325</h4>
                   <h3>成功支付：￥168.00</h3>
               </div>
               <div className="fins">
                  <Link to='/Main'> <a href="">继续逛逛</a> </Link>
                  <Link to='/'> <a href="#">查看订单</a></Link>
               </div>
           </div>
         </div>
      </div>
      </div>
    </Router>
    )
  }
}
export default Finsh
