import React from 'react'
import commercialPic from '../../assets/img/commercialPic.jpg'
import './Commercial.css'

const Service = () => {
  return (
    <section className='flex flex-row justify-center' id='commercial'>
       <div className='basis-1/2'>
            <img src={commercialPic} className='w-full h-full'/>
        </div>
        <div className='basis-1/2 grid grid-cols-1 gap-4 place-content-center bg-gray-300'>
        <h1 className='text-center text-blue-900 text-4xl h1res'>Commercial</h1>
        <p className='text-center pl-20 pr-20 pt-5 text-2xl italic commercialText commercialPadding'>Whether you accidentally backed into your garage door or you need simple maintenance done Carlisle Overhead Doors & Services is just a call away. We operate emergency service 24/7 for the appropriate price.</p>
        <button><a href='#contact' className='commercialText bg-blue-900 pl-5 pr-5 pt-1 pb-1 text-xl text-white'>Commercial</a></button>
        </div>
       
    </section>
  )
}

export default Service