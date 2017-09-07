import React, { Component } from 'react';
// import logo from './logo.svg';
import './main.css';
import box1 from '../../images/pic4_09.jpg'
import box2 from '../../images/pic6_10.jpg'
import box3 from '../../images/pic7_11.jpg'
import box4 from '../../images/pic8_11.jpg'
import box5 from '../../images/yushou_03.png'

class Main extends Component {
  render() {
    return (
         <div className="Main">
             <div className="main clearfix">
                 <div className="left clearfix">
                    <img className="box5" src={box5} alt=""/>
                   <p>龙之谷六周年限定礼包大  <br/>   Boss 冰龙款男士T恤</p>
                     <div className="over ">
                       <p>距预售结束</p>
                       <div className="time clearfix">
                              <span  className="day1"><em>30</em>
                              <b>:</b></span>
                              <span className="hour"><em>30 </em>
                              <b>:</b></span>
                              <span className="min"><em>30 </em>
                              <b>:</b></span>
                              <span className="sec"><em>30 </em></span>
                              <div className="day clearfix">
                                <span>天</span>
                                <span>时</span>
                                <span>分</span>
                                <span>秒</span>
                             </div>
                        </div>
                 </div>

             </div>
              <div className="right">
                 <div className="price">
                    <p>预售价</p>
                    <span>￥<b>700.00</b></span> <br/>
                    <span>正价：960.00</span>
                 </div>
                 <div className="style1 clearfix">
                   <p>款式</p>
                   <a href="#">iphone5</a>
                   <a href="#">iphone6</a>
                   <a href="#">iphone6+</a>
                 </div>
                 <div className="size">
                   <p>尺码</p>
                     <a href="#">XXS</a>
                     <a href="#">XS</a>
                     <a href="#">S</a>
                     <a href="#">M</a><br/>
                     <a href="#">L</a>
                     <a href="#">XL</a>
                     <a href="#">XXL</a>
                 </div>
                 <div className="num clearfix">
                   <p>数量</p>
                   <a href="#" className="sub">-</a>
                   <span>1</span>
                   <a href="#" className="add">+</a>
                 </div>
              </div>
              <div className="rush clearfix">
                 <a href="#">立即预购</a>
              </div>
        </div>
              <div className="main1">
                   <img Name="box1" src={box1} alt=""/>
                   <img className="box2" src={box2} alt=""/>
                   <img className="box3" src={box3} alt=""/>
                   <img className="box4" src={box4} alt=""/>
             </div>
         </div>
    )
  }
}


export default Main;
