import React, { Component } from 'react';
// import logo from './logo.svg';
import './header.css';
import Logo from "../Logo1/Logo"
import Logo1 from "../Logo1/Logo2"
import Logo2 from "../Logo1/Logo3"


import box5 from'../../images/left3_02.jpg'
import box6 from'../../images/room_05.jpg'
import box7 from'../../images/logo2_03.png'
import box8 from'../../images/search_03.png'
import box9 from'../../images/car_02.jpg'
import peo from '../../images/pic1_03.jpg'
import peo1 from '../../images/pic2_03.jpg'
import peo2 from '../../images/pic3_03.jpg'







// import box_1 from'../../images/pic1_03.jpg'
// import box_2 from'../../images/pic2_03.jpg'
// import box_3 from'../../images/pic3_03.jpg'
// import box_4 from'../../images/pic1_03.jpg'
// import box_5 from'../../images/pic2_03.jpg'
// import box_6 from'../../images/pic3_03.jpg'
// import box_7 from'../../images/'
// import box_8 from'../../images/'



class Header extends Component {

  render() {
    return (
      <div className="Header">
          <div className="top">
            <div className="topon">
               <a className="logo" href="#">
                    <Logo color='#ccc' size='40px'/>
               </a>
               <a className="logo2" href="#">
                 <img className="box7" src={box7} alt=""/>
               </a>

               <a className="search" href="#">
                   <Logo1 color='#ccc' size='40px'/>

               </a>

               <a className="car" href="#">
                   <Logo2 color='#ccc' size='40px'/>
               </a>
               <a className="deng" href="#">登录/注册</a>
           </div>
       </div>
            <div className="banner">
                <img className="peo" src={peo} alt=""/>
                <img className="peo1" src={peo1} alt=""/>
                <img className="peo2" src={peo2} alt=""/>
            </div>


</div>

   )
 }
}
export default Header
