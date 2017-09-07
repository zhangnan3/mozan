import React, { Component } from 'react';
// import logo from './logo.svg';
import './footer.css';
import Logo from "../Logo1/logo4"
import Logo1 from "../Logo1/logo5"
import Logo2 from "../Logo1/logo6"
import Logo3 from "../Logo1/logo7"
import Logo4 from "../Logo1/logo8"
import Logo5 from "../Logo1/logo9"
import Logo6 from "../Logo1/tiao"
import Logo7 from "../Logo1/you"
import Logo8 from "../Logo1/phone"





import box1 from '../../images/qq_03.jpg'
import box2 from '../../images/tao_10.jpg'
import box3 from '../../images/wei_03.jpg'
import box4 from '../../images/wei1_14.png'
import box5 from '../../images/logo2_03.png'


class Footer extends Component {
  render() {
    return (
      <div className="Footer">

      <div className="footerup">
  	  	 	  <div className="footerin clearfix">

  	  	 	  	    <ul className="shop">
  	  	 	  	    <p>帮助信息</p>
  	  	 	  	    	<li>
                      <Logo color='yellow' size='18px'/>

  	  	 	  	    	购物指南</li>
  	  	 	  	    	<li>
  	  	 	  	    	<Logo1 color='yellow' size='18px'/>
  	  	 	  	    	支付方式

  	  	 	  	    	</li>
  	  	 	  	    	<li>
                     <Logo2 color='yellow' size='18px'/>
  	  	 	  	    	配送方式</li>
  	  	 	  	    	<li>
                     <Logo3 color='yellow' size='18px'/>
  	  	 	  	    	售后服务</li>
  	  	 	  	    </ul>
  	  	 	  	    <ul className="shop1">
  	  	 	  	    	<li>
                    <Logo4 color='yellow' size='18px'/>
  	  	 	  	    	服务中心</li>
  	  	 	  	    	<li>
                     <Logo5 color='yellow' size='18px'/>
  	  	 	  	    	关于我们</li>
  	  	 	  	    	<li>
                     <Logo6 color='yellow' size='18px'/>
  	  	 	  	    	免责条款</li>
  	  	 	  	    	<li>
                     <Logo7 color='yellow' size='18px'/>
  	  	 	  	    	友情链接</li>
  	  	 	  	    </ul>
  	  	 	  	  <div className="are">
  	  	 	  	     <div className="pic2">
  		  	 	  	      <p>关注我们</p>
                      <img className="box1" src={box1} alt=""/>

                      <img className="box2" src={box2} alt=""/>

  	  	 	  	     </div>
  	  	 	  	  	 <div className="pic1">

                     <img className="box3" src={box3} alt=""/>
                       <img className="box4" src={box4} alt=""/>

  	  	 	  	  	 </div>

  	  	 	  	  </div>
  	  	 	  	  <div className="ser">
  	  	 	  	  	  <p>服务热线</p>
  	  	 	  	  	  <span>
      	  	 	  	  	  <Logo4 color='yellow' size='18px'/>
      	  	 	  	  	  <b>400 113 5353</b>
      	  	 	  	  	 &nbsp;&nbsp;&nbsp&nbsp [周一至周五9：00-18:00]
  	  	 	  	  	  </span>
  	  	 	  	  </div>
  	  	 	  </div>
  	  	 </div>
  	  	 <div className="footerdown">
  	  	 	  <div className="footeron clearfix">
  	  	 	  	 <a href="#">
                 <img className="box5" src={box5} alt=""/>

  	  	 	  	 </a>
  	  	 	  	 <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights reserved.
               地址：北京市朝阳区建国路93号院4号楼4层505
  	  	 	  	 </p>
  	  	 	  </div>
  	  	 </div>
     </div>


       )
     }
  }

  export default Footer
