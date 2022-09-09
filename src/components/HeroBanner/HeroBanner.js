import React from 'react';
import './HeroBanner.css';
import gvPic from '../../assets/img/gv_map.png';
import heroCommercialPic from '../../assets/img/heroBannerCommercial.jpg';
import heroBannerInspiration from '../../assets/img/heroBannerInspiration.jpg'
import { Fade } from 'react-reveal'

const HeroBanner = () => {
  return (
    <main className='relative heroBannerBackground heroBannerResponsive'>
      {/* <img src={heroBannerImage} alt="" className='heroBannerImage' /> */}
      <h1 className='text-5xl text-center pt-10 navTitleResponsive text-blue-800 italic font-bold'>Carlisle Overhead Doors & Services LLC</h1>
      <section className='flex flex-row pt-10 justify-center heroBannerSection'>
        <Fade bottom>
        <div className="max-w-sm bg-blue-900 bg-opacity-50 rounded-lg shadow-md mr-3 heroBannerResponsive">
          <a href="#">
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h5 className="heroBannerResponsiveFont mb-2 text-blue-800 text-2xl font-bold tracking-tight">Conveniently located in Grain Valley, MO</h5>
            </a>
            <img src={gvPic} className='resImage m-auto' />
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Show Map
            </a>
          </div>
        </div>
        </Fade>

        <div className="max-w-sm bg-blue-900 bg-opacity-50 rounded-lg shadow-md mr-3 heroBannerResponsive">
          <a href="#">
          </a>
          <div className="p-5 text-center">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white heroBannerResponsiveFont">Do you need a little inspiration?</h5>
            </a>
            <p className="mb-3 italic text-white">Carlisle Overhead Doors & Services is always willing to come out and show you samples and or help you decide on color, style, and even performance when it comes to garage door openers.</p>
            <img src={heroBannerInspiration} className='object-scale-down h-48 m-auto rounded resImage' />
          </div>
        </div>

        <div className="hide max-w-sm bg-blue-900 bg-opacity-10 rounded-lg shadow-md heroBannerResponsive">
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white heroBannerResponsiveFont">We offer all <span className='underline underline-offset-4'>Commercial </span>Garage Doors and Accessories</h5>
            <p className="mb-3 italic text-white">We offer all commercial installation and service. No job to big</p>
            <img src={heroCommercialPic} className='object-scale-down h-48 m-auto rounded resImage' />
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm mt-5 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 heroBannerResponsive">
              Call Now
            </a>
          </div>
        </div>
      </section>




    </main>
  )
}

export default HeroBanner