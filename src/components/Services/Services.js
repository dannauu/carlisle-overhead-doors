import React, { useState } from 'react'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import { MdMarkEmailUnread } from 'react-icons/md'
import FirestationService from '../../assets/img/firestationService.jpeg'
import Residential from '../Residential/Residential'
import Commercial from '../Commercial/Commercial'
import Opener from '../../assets/img/service.jpg'
import LogoSlider from '../LogoSlider/LogoSlider'
import ServiceParts from '../ServiceParts/ServiceParts'



const Services = () => {
  const [currentService, setCurrentService] = useState('')
  return (
    <div className='h-screen backdrop-blur-md text-center'>
      <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2'>What kind of service are you looking for?</h1>
      <div className='pt-4'>
        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => setCurrentService('residential')}>Residential</button>
        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => setCurrentService('commercial')}>Commercial</button>
        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => setCurrentService('serviceParts')}>Service/Parts</button>
      </div>
      {currentService === 'residential' && <Residential />}
      {currentService === 'commercial' && <Commercial />}
      {currentService === 'serviceParts' && <ServiceParts />}
    </div>

  )
}

export default Services