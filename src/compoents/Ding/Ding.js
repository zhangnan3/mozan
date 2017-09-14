import React, { Component } from 'react';
// import logo from './logo.svg';
import './ding.css';
import box4 from '../../images/zhifu_03.jpg'
import box2 from '../../images/zhifu1_03.jpg'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
class Ding extends Component {
  render (){
    return(
      <Router>
      <div classNameName='ding'>
      <div className="main9 ">
          <div className="con ">
           <p>收银台</p>
           <ul>
            <li>购物车</li>
            <li>填写订单</li>
            <li>付款，购买成功</li>
           </ul>
         </div>
         <div className="order clearfix">
            <p>订单提交成功，请您尽快付款</p>
            <div className="one">
                <span>请您在提交订单后 <em>24小时</em>内完成支付，否则订单会自动取消。</span>
                <span> 应付金额：<b>￥168.00</b></span>
            </div>
         </div>
         <div className="two clearfix">
            <p className="two1">订单号：1234567982485</p>
            <div className="three">
               <p className="name">
                <i className="iconfont">&#xe6ee;</i>
               迪力木拉提 <span>
               <i className="iconfont">&#xe6b9;</i>
               186****0734</span></p>
             <br/> <p>
                <i className="iconfont">&#xe618;</i>
                新疆维吾尔自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路56园72幢1单元1103
               </p>
            </div>
         </div>
         <div className="four clearfix">
               <b>选择支付方式</b>
                <img className="box4" src={box4} alt=""/> 
            <Link to='/Finsh'>  <img className="box2" src={box2} alt=""/> </Link>
         </div>
         <div className="fix ">
             <Link to='/Wei'>  <a href="">提交订单</a></Link>
         </div>

      </div>
      </div>
    </Router>
    )
  }
}
export default Ding
