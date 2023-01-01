import React, { useState } from 'react'
import Residential from '../Residential/Residential'
import Commercial from '../Commercial/Commercial'
import LogoSlider from '../LogoSlider/LogoSlider'
import ServiceParts from '../ServiceParts/ServiceParts'
import { FaTools, FaWarehouse } from 'react-icons/fa'
import { GiHomeGarage } from 'react-icons/gi'




const Services = () => {
  const [currentService, setCurrentService] = useState('What kind of service are you looking for?')
  return (
    <div className='backdrop-blur-md text-center min-h-screen'>
      <LogoSlider/>
      <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2 sm:text-xl'>{currentService}</h1>
      <div className='pt-4'>
        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white shadow-lg shadow-red-500/50 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 sm:p-2 sm:text-xs' onClick={() => setCurrentService('Residential')}>Residential <GiHomeGarage className='m-auto text-5xl'/></button>
        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white shadow-lg shadow-red-500/50 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 sm:p-2 sm:text-xs' onClick={() => setCurrentService('Commercial')}>Commercial <FaWarehouse className='m-auto text-5xl'/></button>
        <button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white shadow-lg shadow-red-500/50 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2 sm:p-2 sm:text-xs' onClick={() => setCurrentService('Service')}>Service/Parts <FaTools className='m-auto text-5xl'/></button>
        
      </div>
      {currentService === 'Residential' && <Residential />}
      {currentService === 'Commercial' && <Commercial />}
      {currentService === 'Service' && <ServiceParts />}
    </div>

  )
}

export default Services