import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="" className='banner-img' />
          <div className="hero-ception">
            <img src={hero_title} alt="" className='caption-img' />
            <p>
              Discoevring his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest
              to save the city from an immortal enemy.
            </p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards title={"Popular"} category={"popular"}/>
          </div>
        </div>

        <div className="more-cards">
          <TitleCards title={"Now Playing"} type={"movie"} category={"now_playing"}/>
          <TitleCards title={"Popular Movies"} type={"movie"} category={"popular"}/>
          <TitleCards title={"Upcoming"} type={"movie"} category={"upcoming"}/>
          <TitleCards title={"Top Rated Movies"} type={"movie"} category={"top_rated"}/>
          <TitleCards title={"Airing Today"} type={"tv"} category={"airing_today"}/>
          <TitleCards title={"On The Air"} type={"tv"} category={"on_the_air"}/>
          <TitleCards title={"Popular TV Shows"} type={"tv"} category={"popular"}/>
          <TitleCards title={"Top Rated TV Shows"} type={"tv"} category={"top_rated"}/>

        </div>
        
        <Footer/>
    </div>
  )
}

export default Home