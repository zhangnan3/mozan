import React, { Component } from 'react';
// import logo from './logo.svg';
import './wei.css';
import box1 from '../../images/wei.jpg'
class Wei extends Component {
  render (){
    return(
      <div className='wei1'>
        <div className="joinup">
          <div className=" shop9 ">
            <p>收银台
                <div className="word clearfix">
                  <span>购物车</span>
                  <span>填写订单</span>
                  <span>付款，购买成功</span>
                </div>
            </p>
          </div>
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
              <i class="iconfont">&#xe6b9;</i>
              186****0734</span></p>
            <br/> <p>
               <i className="iconfont">&#xe618;</i>
               新疆维吾尔自治区伊犁哈萨克自治州奎屯市乌鲁木齐西路56园72幢1单元1103
              </p>
           </div>
        </div>
        <div className="wei clearfix">
            <p>微信支付</p>
            <img className="box1" src={box1} alt=""/>
            <span>60</span>
        </div>
      </div>
    )
  }
}
export default Wei
