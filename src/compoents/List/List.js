import React, { Component } from 'react';
// import logo from './logo.svg';
import './list.css';
import Listdown from'../Listdown/Down1'
import img from '../../images/join_01.jpg'
class List extends Component {
  state={
    app1:[
      {image:img},{image:img},{image:img}
    ]
  }
  render (){
    const list = this.state.app1.map((t, i) => (
      <div key={i}className="list clearfix">
        <ul>
          <li>
            <i className="iconfont icon-weibiaoti1"></i>阿不来提·阿不杜热西提
          </li>
          <li>
            <i className="iconfont icon-weibiaoti3"></i>
          新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团忽热郭9连5区13号木村</li>
          <li>
            <i className="iconfont icon-phone"></i>186***5194
          </li>
        </ul>
        <div className="clearfix">
          <a href="#" className="set">设为默认</a>
          <a href="#" className="editor"><i class="iconfont icon-bianji"></i>编辑</a>
          <a href="#" className="del"><i class="iconfont icon-trash"></i>删除</a>
        </div>
      </div>
    ))
    return(
      <div className='lists'>
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
            <div className="joindown">
                <div className="adr clearfix">
                  <p>收获地址</p>
                  <a href="#" className="setnew">新增地址</a>
                </div>
                  {list}
                  <div className="showmore">
    								<a href="#" className="more">显示更多</a>
    								<a href="#" className="toup">向上收起</a>
    							</div>
            </div>
            <Listdown/>
      </div>
    )
  }
}
export default List
