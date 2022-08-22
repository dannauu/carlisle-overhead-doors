import React from 'react'
import servicePic from '../../assets/img/servicePic.jpg'

const Service = () => {
  return (
    <section className='flex flex-row justify-center'>
        <div className='basis-1/2'>
            <img src={servicePic} className='w-full'/>
        </div>
        <div className='basis-1/2'>
            <h1 className='text-center'>Service</h1>
        </div>
    </section>
  )
}

export default Service