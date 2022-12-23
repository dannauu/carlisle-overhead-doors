import React from 'react'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { MdMarkEmailUnread } from 'react-icons/md'
import Liftmaster from '../../assets/img/liftmaster.png'
import Delden from '../../assets/img/Delden-Official-Logo.jpg'
import Amarr from '../../assets/img/Amarr.jpg'
import Clopay from '../../assets/img/clopay.png'

const Services = () => {
  return (
    <div className='h-screen backdrop-blur-md grid grid-cols-2 gap-4 p-10'>
      <div className='bg-red-200 p-5'>
        <h1 className='googleFont text-center text-3xl underline'>Residential Services</h1>
      </div>
      <div className='bg-red-200 p-5'>
        <h1 className='googleFont text-center text-3xl underline'>Commercial Services</h1>
      </div>
      <div className='bg-red-200 p-5'>
        <h1 className='googleFont text-center text-3xl underline'>Openers</h1>
      </div>
      <div className='bg-red-200 p-5'>
        <h1 className='googleFont text-center text-3xl underline'>Parts</h1>
      </div>
      <div className='col-span-2 text-black rounded-lg'>
        <h1 className='googleFont text-center text-3xl'>Support & Service</h1>
        <p className='text-center text-lg pt-5'>At Carlisle Overhead Doors & Services we take residential and commercial service very seriously. We have served the Kansas City Metro and the surrounding areas since 2007. From simple fixes like pairing remotes or emergency service because your door is hanging in the middle of the opening; we are here to assist you 24/7. Please do not try to fix your garage door yourself, there are a lot of dangerous moving parts to a garage door that I would be happy to help identify with you.</p>
        {/* <div className='grid grid-cols-4 gap-4 place-items-center pt-5 pr-2'>
          <img className='h-48 mix-blend-color-burn' src={Liftmaster}></img>
          <img className='h-32' src={Delden}></img>
          <img className='h-36' src={Amarr}></img>
          <img className='h-48' src={Clopay}></img>
        </div> */}
        <div className='grid grid-cols-2 gap-4 place-items- pt-5'>
          <div className='text-center flex flex-col items-center text-4xl'>
            <h2 className='pb-4'>Call</h2>
            <a href='tel:816-288-3574'><BsFillTelephoneOutboundFill /></a>
          </div>
          <div className='text-center flex flex-col items-center text-4xl'>
            <h2 className='pb-4'>Email</h2>
            <a href='to:'><MdMarkEmailUnread /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services