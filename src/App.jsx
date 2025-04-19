import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Toplist from './components/topl-list/Toplist'
import BgImage from '/images/bg.jpg'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'

const bgStyle = {
  backgroundImage : `url(${BgImage})`,
  backgroundRepeat : "no-repeat",
  backgroundSize : "cover",
  backgroundPosition : "center",
};

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
        <Navbar/>
        <Hero/>
        <Toplist/>
        <Banner/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
