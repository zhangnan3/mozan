import React, { Component } from 'react';
// import logo from './logo.svg';
import './car.css';
import img from '../../images/join_01.jpg'
import Down from'../Down/Down'
class Car extends Component {
    state={
      app1:[
        {image:img},{image:img},{image:img},{image:img}
      ]
    }
  render (){
    const list = this.state.app1.map((t, i) => (
      <div key={i} className="goods clearfix">
        <input type="checkbox"  className="item"/>
        <a href="#"><img Name="box1" src={t.image} alt=""/></a>
        <p>
          <a href="#">龙之谷六周年限定礼包大Boss 冰龙款男士T恤</a>
          <span>款式：iphone 5</span>
          <span>尺码：XL</span>
        </p>
        <div className="money clearfix">
          <p>￥<span className="price">79.00</span></p>
          <a href="#" className="add">+</a>
          <span className="qty">1</span>
          <a href="#" className="red">-</a>
          <p >￥<span className="tt">79</span></p>
          <a href="#" className="del">x</a>
          </div>
      </div>
    )
  )
    return(
      <div className='cars'>
          <div className="joinup">
            <div className=" shop9 ">
  						<p>购物车
  							<b>[ <span className="totalqty"></span>件 ]</b>
                  <div className="word clearfix">
      							<span>购物车</span>
      							<span>填写订单</span>
      							<span>付款，购买成功</span>
      						</div>
  						</p>
  					</div>
          </div>
          <form className="list">
  					<div className="title">
  						<input type="checkbox" id="all" class="all"/>
  						<label for="all">全选</label>
  						<span>商品</span>
  						<span>单价</span>
  						<span>数量</span>
  						<span>小计</span>
  						<span>操作</span>
  					</div>
              {list}

  				</form>
          <Down />
      </div>
    )
  }
}
export default Car
