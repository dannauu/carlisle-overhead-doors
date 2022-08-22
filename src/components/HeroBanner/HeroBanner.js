import React from 'react';
import heroBannerImage from '../../assets/img/heroBannerImage.jpg';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <main className='relative'>
        <img src={heroBannerImage} alt="" className='heroBannerImage'/>
        <h1 className='text-6xl absolute top-32 left-96 heroBanner'>Carlisle Overhead Doors & Services</h1>
    </main>
  )
}

export default HeroBanner