import React from 'react'
import commercialPic from '../../assets/img/commercialPic.jpg'

const Service = () => {
  return (
    <section className='flex flex-row justify-center'>
        <div className='basis-1/2'>
        <h1 className='text-center'>Commercial</h1>
        </div>
        <div className='basis-1/2'>

            <img src={commercialPic} className='w-full'/>
        </div>
    </section>
  )
}

export default Service