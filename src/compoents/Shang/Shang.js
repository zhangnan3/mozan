import React, { Component } from 'react';
// import logo from './logo.svg';
import './shang.css';
import Header from'../Header/Header'
import Footer from'../Footer/Footer'
import box1 from '../../images/join_01.jpg'
import box2 from'../../images/pic3_03.jpg'
import Logo2 from "../Logo1/Logo3"
import {HashRouter as Router,Route,Link} from 'react-router-dom'
class Shang extends Component {
  render (){
    return(
        <div className="shang">
          <div className="join">
      <div className="joinup">
        <div className="shop9 clearfix">
          <p>已成功加入购物车！</p>
        </div>
      </div>
      <div>
      </div>
      <div className="clearfix">
        <div className="pic clearfix">
          <a href="#">
               <img Name="box1" src={box1} alt=""/>
          </a>
          <a href="#" className="words">
          龙之谷六周年限定礼包大Boss 冰龙款男士T恤
          </a>
        </div>
        <div className="size">
          <span>款式：iphone 5</span>
          <span>尺码：XL</span>
          <span>数量：x1</span>
        </div>
        <div className="btn clearfix">
          <a href="index.html">返回</a>
          <Link to='/Car'><a href="buycar.html">去购物车结算</a></Link>
        </div>
      </div>
    </div>
       <div className="down1">
          <div className="down">
                <div className="other-need clearfix">
                  <h4> 您可能还需要</h4>
                  <span className="line-yellow">
                  </span>
                </div>
                <ul className="other clearfix">
                  <li className="clearfix">
                    <a className="othimg" href=" "><img Name="box2" src={box2} alt=""/></a >
                    <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a >

                    <span className="price">¥88.00</span>
                    <a className="addbag" href="http">
                        <Logo2 color='yellow' size='20px'/>
                    </a >
                  </li>
                  <li className="clearfix">
                    <a className="othimg" href="http"><img Name="box2" src={box2} alt=""/></a >
                    <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a >

                    <span className="price">¥88.00</span>
                    <a className="addbag" href="http">
                        <Logo2 color='yellow' size='20px'/>
                    </a >
                  </li>
                  <li className="clearfix">
                    <a className="othimg" href="http"><img Name="box2" src={box2} alt=""/></a >
                    <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a >

                    <span className="price">¥88.00</span>
                    <a className="addbag" href="http">
                       <Logo2 color='yellow' size='20px'/>
                    </a >
                  </li>
                  <li className="clearfix">
                    <a className="othimg" href="http"><img Name="box2" src={box2} alt=""/></a >
                    <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a >

                    <span className="price">¥88.00</span>
                    <a className="addbag" href="http">
                       <Logo2 color='yellow' size='20px'/>
                    </a >
                  </li>
                  <li className="clearfix">
                    <a className="othimg" href="http"><img Name="box2" src={box2} alt=""/></a >
                    <a className="title2" href="http">龙之谷六周年限定礼包大boss冰龙款...</a >

                    <span className="price">¥88.00</span>
                    <a className="addbag" href="http">
                        <Logo2 color='yellow' size='20px'/>
                    </a >
                  </li>
                </ul>
              </div>
            </div>
        </div>


    )
  }
}
export default Shang
