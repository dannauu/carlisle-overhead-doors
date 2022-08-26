import React from 'react'
import residentialPic from '../../assets/img/GalleryPics/residentialPic.jpg'
import './Residential.css'

const Service = () => {
  return (
    <section className='flex flex-row justify-center' id='residential'>
        <div className='basis-1/2 grid grid-cols-1 gap-4 place-content-center bg-gray-300'>
        <h1 className='text-center text-blue-900 text-4xl h1res {
        font-size: 20px;
    }'>Residential</h1>
        <p className='text-center pl-20 pr-20 pt-5 text-2xl italic residentialText residentialPadding'>Whether you accidentally backed into your garage door or you need simple maintenance done Carlisle Overhead Doors & Services is just a call away. We operate emergency service 24/7 for the appropriate price.</p>
        <button><a className='bg-blue-900 pl-5 pr-5 pt-1 pb-1 text-xl text-white residentialText'>Residential</a></button>
        </div>
        <div className='basis-1/2'>
            <img src={residentialPic} className='h-full'/>
        </div>
    </section>
  )
}

export default Service