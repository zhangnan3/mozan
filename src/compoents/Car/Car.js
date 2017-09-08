import React, { Component } from 'react';
// import logo from './logo.svg';
import './car.css';

class Car extends Component {
  render (){
    return(
      <div className='cars'>
          <div className="joinup">
            <div className="shop9 clearfix">
              <p>已成功加入购物车！</p>
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
            <div className="goods clearfix">
  						<input type="checkbox"  className="item"/>
  						<a href="#"></a>
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
  						<div className="delbtn clearfix">
  							<a href="#" className="delyes">确定删除</a>
  							<a href="#" className="delno">不删除</a>

  						</div>
  					</div>


  				</form>
      </div>
    )
  }
}
export default Car
