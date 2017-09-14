import React, { Component } from 'react';
// import logo from './logo.svg';
import './main.css';
import Time from'../Time/Time'
import box1 from '../../images/pic4_09.jpg'
import box2 from '../../images/pic6_10.jpg'
import box3 from '../../images/pic7_11.jpg'
import box4 from '../../images/pic8_11.jpg'
import box5 from '../../images/yushou_03.png'
import Slider from'../Slider/Slider'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
class Main extends Component {
    state = {
    activeIndex: 0,
    activeIndex1: 0,
    count:0,
    app1: [
      {box1:'iphone5'},{box1: 'iphone6'},{box1: 'iphone7'}],
    app2: [
      {size9:'XS'},
      {size9:'XXS'},
      {size9:'S'},
      {size9:'M'},
      {size9: 'L'},
      {size9: 'XL'},
      {size9: 'XXL'}
     ]
   }
     handleClick = (i) => {this.setState({activeIndex: i})}

        handleClicks = (i) => {this.setState({  activeIndex1: i  })}

        handleClick2 =() => {this.setState({count:this.state.count + 1})}

        handleClick1 =() => {this.setState({count:this.state.count - 1})}

       render() {
         const left = this.state.app1.map((t, i) => (
           <div onClick={() => this.handleClicks(i)}
             className={`box1 ${this.state.activeIndex1===i&& 'active'}`}
             key={i}>{t.box1}</div>))

      const list1 = this.state.app2.map((t, i) => (
      <div onClick={() => this.handleClick(i)}
        className={`size9 ${this.state.activeIndex===i&& 'active'}`}
        key={i}>{t.size9}</div>))
    return (
      <Router>

         <div className="main2">
             <Slider/>
             <div className="main clearfix">
                 <div className="left clearfix">
                    <img className="box5" src={box5} alt=""/>
                   <p>龙之谷六周年限定礼包大  <br/>   Boss 冰龙款男士T恤</p>

                       <p className='end'>距预售结束</p>
                              <Time/>


             </div>
              <div className="right">
                 <div className="price">
                    <p>预售价</p>
                    <span>￥<b>700.00</b></span> <br/>
                    <span>正价：960.00</span>
                 </div>
                 <div className="style1 clearfix">
                   <p>款式</p>
                       {left}
                 </div>
                 <div className="size">
                   <p>尺码</p>
                     {list1}
                 </div>
                 <div className="num clearfix">
                   <p>数量</p>
                   <a className="sub" onClick={this.handleClick1}>-</a>
                   <span>
                       {this.state.count}
                   </span>
                   <a className="add" onClick={this.handleClick2} >+</a>
                 </div>
              </div>

              <div className="rush clearfix">
                   <Link to='/Shang'><a href="#">立即预购</a></Link>
              </div>

        </div>
              <div className="main1 clearfix">
                   <img className="box1" src={box1} alt=""/>
                   <img className="box2" src={box2} alt=""/>
                   <img className="box3" src={box3} alt=""/>
                   <img className="box4" src={box4} alt=""/>
             </div>
         </div>
       </Router>

    )

  }
}
export default Main;
