import React, { Component } from 'react';
// import logo from './logo.svg';
import './down.css';
import {HashRouter as Router,Route,Link} from 'react-router-dom'

class Down extends Component {
  render (){
    return(
      <div className='down'>
          <div className="end">
            <div className="endin clearfix">
              <div className="endleft clearfix">
                <input type="checkbox" id="all1" className='all' />
                <label for="all1">全选</label>
                <a href="#" className="deldown"><i class="iconfont icon-trash"></i>删除</a>

                <p>共 <span className="totalqty"></span> 件商品,已选择 <span className="selectnum"></span> 件</p>
                <div class="clearfix">
                  <p class="clearfix">
                    <span>合计:</span>
                    <span>[不含运费]</span>
                  </p>
                  <p>￥<span className="total">0</span></p>
                </div>
              </div>
              <div className="endright">
                <Link to='/List'><a href="order.html" className="gosub">去结算</a></Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Down
