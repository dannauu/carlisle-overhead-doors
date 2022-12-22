import React from 'react'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { FaWarehouse, FaTools } from 'react-icons/fa'
import { GiHomeGarage, GiSpring } from 'react-icons/gi'

const QuickLinks = () => {
  return (
    <div className='grid grid-cols-5 grid-flow-col gap-4 pt-10 text-black text-center'>
        <a href='#residential' className='flex flex-col items-center'>
        <h1 className='text-lg font-semibold'>Residential</h1>
          <div className='text-3xl'>
            <BsFillHouseDoorFill />
          </div>
        </a>
        <a href='#commercial' className='flex flex-col items-center'>
          {/* href will be carlisleoverheaddoorsandservices.com/services#commercial */}
          <h1 className='text-lg font-semibold'>Commercial</h1>
          <div className='text-3xl'>
            <FaWarehouse />
          </div>
        </a>
        <a href='#service' className='flex flex-col items-center'>
        <h1 className='text-lg font-semibold'>Service/Repair</h1>
          <div className='text-3xl'>
            <FaTools />
          </div>
        </a>
        <a href='#openers' className='flex flex-col items-center'>
        <h1 className='text-lg font-semibold'>Openers</h1>
          <div className='text-3xl'>
            <GiHomeGarage />
          </div>
        </a>
        <a href='parts' className='flex flex-col items-center'>
        <h1 className='text-lg font-semibold'>Parts</h1>
          <div className='text-3xl'>
            <GiSpring />
          </div>
        </a>
      </div>
  )
}

export default QuickLinks