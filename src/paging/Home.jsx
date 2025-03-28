import React from 'react'
import Showcase from '../components/Showcase'
import Swiper from '../components/Swiper'

const Home = () => {
  return (
    <div>
        <Showcase />
        <div className="container">
            <Swiper />
        </div>
    </div>
  )
}

export default Home
