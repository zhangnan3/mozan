import React, { Component } from 'react'
import './Slider.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import peo from '../../images/pic1_03.jpg'
import peo1 from '../../images/pic2_03.jpg'
import peo2 from '../../images/pic3_03.jpg'

class Sliders extends Component {

  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrow: false,
      autoplay: true
    }

    let slideStr = [

      <div className='dish-card-wrap' key='1'>
        <div className='dish-card'>
          <img className="peo" src={peo} alt=""/>
        </div>
      </div>,
      <div className='dish-card-wrap' key='2'>
        <div className='dish-card'>
          <img className="peo1" src={peo1} alt=""/>
        </div>
      </div>,
      <div className='dish-card-wrap' key='33'>
        <div className='dish-card'>
          <img className="peo2" src={peo2} alt=""/>
        </div>
      </div>
    ]

    let slides = (
      <Slider {...settings}>
        { slideStr}
      </Slider>
    )
    return (
      <div className='banner'>
        <div className="banneron">
           {slides}
        </div>

      </div>
    )
  }
}

export default Sliders
