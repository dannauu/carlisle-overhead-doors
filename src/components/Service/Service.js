import React from 'react'
import servicePic from '../../assets/img/servicePic.jpg'
import './Service.css'

const Service = () => {
  return (
    <section className='flex flex-row justify-center serviceResponsive' id='service'>
        <div className='basis-1/2'>
            <img src={servicePic} className='w-full h-full' alt='Service Picture'/>
        </div>
        <div className='basis-1/2 grid grid-cols-1 gap-4 place-content-center bg-gray-300'>
            <h1 className='text-center text-blue-900 text-4xl h1res'>Service</h1>
            <p className='text-center pl-20 pr-20 pt-5 text-2xl italic serviceResponsiveText servicePadding'>Whether you accidentally backed into your garage door or you need simple maintenance done Carlisle Overhead Doors & Services is just a call away. We operate emergency service 24/7 for the appropriate price.</p>
            <button><a href='#contact' className='bg-blue-900 pl-5 pr-5 pt-1 pb-1 text-xl text-white serviceResponsiveText'>Service</a></button>
        </div>
    </section>
  )
}

export default Service