import React from 'react'
import QuickLinks from '../QuickLinks/QuickLinks'

const Home = () => {
  return (
    <div className='p-3 h-screen grid grid-rows-5 grid-flow-col gap-4'>
      <QuickLinks />
      <div>
        <p className='text-6xl font-bold pl-10'><span className='text-orange-400'>Top Notch </span>garage <br></br> door installation <br></br> and services <br></br> that you can<br></br> count on 24/7.</p>
      </div>
    </div>
  )
}

export default Home