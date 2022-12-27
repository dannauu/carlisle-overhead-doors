import React from 'react'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { MdMarkEmailUnread } from 'react-icons/md'
import FirestationService from '../../assets/img/firestationService.jpeg'
import Residential from '../../assets/img/residential.jpg'
import Commercial from '../../assets/img/commercial.jpg'
import Opener from '../../assets/img/service.jpg'
import LogoSlider from '../LogoSlider/LogoSlider'


const Services = () => {
  return (
    <div>
      <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2'>Company Services</h1>
      <LogoSlider />
      <div className='backdrop-blur-md grid grid-cols-2 gap-10 p-10'>
        <div className=' p-5 rounded-2xl'>
          <h1 className='googleFont text-white text-center text-3xl pb-4'>Residential Services</h1>
          <img src={Residential} className='h-60 rounded-xl float-left pr-4'></img>
          <p className='text-white text-right text-xl italic'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className=' p-5 rounded-2xl'>
          <h1 className='googleFont text-white text-center text-3xl pb-4'>Commercial Services</h1>
          <img src={Commercial} className='h-60 rounded-xl float-right pl-4'></img>
          <p className='text-white text-xl italic'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className=' p-5 rounded-2xl'>
          <h1 className='googleFont text-white text-center text-3xl pb-4'>Openers</h1>
          <img src={Opener} className='h-72 rounded-xl float-left pr-4'></img>
          <p className='text-white text-right text-xl italic'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className=' p-5 rounded-2xl'>
          <h1 className='googleFont text-white text-center text-3xl pb-4'>Parts</h1>
          <img src={FirestationService} className='h-72 rounded-xl float-right pl-4'></img>
          <p className='text-white text-xl italic'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className='col-span-2 rounded-lg bg-black/60 text-white pb-3'>
          <h1 className='googleFont text-center text-3xl pt-2'>Support & Service</h1>
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
    </div>

  )
}

export default Services