import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icons from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/Navbar/Titlecards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti labore minima harum quam nihil iure distinctio nisi fugit. Porro voluptatem, omnis explicabo illum temporibus impedit. Modi officia earum perferendis sint!</p>
            <div className="hero-btns">
                <button className='btn'><img src={play_icons} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />more_info</button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={'blockbuster movies'}category={'top_rated'}/>
      <TitleCards title={'Only on netflix'} category={'popular'}/>
      <TitleCards title={'Top pics for you'}category={'upcoming'}/>
      <TitleCards title={'exclusive'}category={'now_playing'}/>
      </div>
      <Footer/>
    </div>
  )
}
  
export default Home
