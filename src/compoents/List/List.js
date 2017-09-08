import React, { Component } from 'react';
// import logo from './logo.svg';
import './list.css';

class List extends Component {
  render (){
    return(
      <div className='lists'>
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
      </div>
    )
  }
}
export default List
