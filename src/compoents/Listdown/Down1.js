import React, { Component } from 'react';
// import logo from './logo.svg';
import './down1.css';
import box2 from '../../images/yushou_03.png'
import box1 from '../../images/join_01.jpg'
import img from '../../images/join_01.jpg'
class Down1 extends Component {
  state={
    app1:[
      {image:img},{image:img}
    ]
  }
  render (){
    const list = this.state.app1.map((t, i) => (
      <div key={i} className="listd clearfix">
        <div className="pic clearfix">
          <a href="#">
            <img className="box1" src={box1} alt=""/>
          </a>
          <span>
            <img className="box2" src={box2} alt=""/>
            </span>
          <a href="#" className="words">
          龙之谷六周年限定礼包大Boss 冰龙款男士T恤
          </a>
        </div>
        <div className="size">
          <span>款式：iphone 5</span>
          <span>尺码：XL</span>
          <span>￥<em>79</em></span>
          <span>x1</span>
        </div>
      </div>
    ))
    return(
      <div className='down1'>

        <div className="adr goods clearfix">
          <p>商品信息</p>
          <a href="#">返回购物车修改</a>
        </div>
           {list}

           <div className="messege clearfix">
              <p className="clearfix">
                <span>支付方式</span>
                <a href="#">在线支付</a>
              </p>
              <p className="clearfix">
                <span>物流方式</span>
                <a href="#">普通快递</a>
              </p>
              <p className="invoice clearfix">
                <span>发票信息</span>
                <a href="#" className="no">不开发票</a>
                <a href="#" className="yes active3">开发票</a>
              </p>
              <p class="yesinvoice  clearfix">

                <input type="text" value="请输入个人/单位名称"/>
                <a href="#" className='save'>保存</a>
              </p>
            </div>
            <div className="other clearfix">
              <p>备注</p>
              <input type="text" className="text"/>
              <p>
                <span>数量</span>
                <span>单价</span>
                <span>小计</span>
                <span>优惠</span>
                <span>运费</span>
                <span>实际应付</span>
              </p>
              <p>
                <span>2</span>
                <span>x</span>
                <span>79.00</span>
                <span>=</span>
                <span>￥158.00</span>
                <span>-</span>
                <span>￥0.00</span>
                <span>+</span>
                <span>￥10.00</span>
                <span>=</span>
                <span>￥168.00</span>
              </p>
              <div className="clearfix">
                <a href="counter.html" className="btn">提交订单</a>
              </div>
            </div>

      </div>
    )
  }
}
export default Down1
