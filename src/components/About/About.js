import React from 'react'
import asdf from '../../assets/img/residential.jpg'
import { GrFacebook } from 'react-icons/gr'
import GrainValleyMap from '../../assets/img/grainValleyMap.png'


const About = () => {
  return (
    <div className='backdrop-blur-md'>

      <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2 sm:text-xl'>About Us</h1>

      <div className='text-white'>
        <h2 className='pt-5 text-center text-xl font-medium italic underline decoration-red-800'>Serving the Kansas City Metro and surrounding areas since 2007.</h2>
        <img src={asdf} className='h-80 float-right p-5 rounded-3xl sm:h-48' />
        <p className='text-lg p-3 sm:text-sm'>Carlisle Overhead Doors & Services is a locally owned and operated company serving the Kansas City Metro and surrounding areas. With over 15 years experience we strive to provide the highest quality work and strong focus on our customers needs.</p>
        <p className='text-lg p-3 sm:text-sm'>With Clopay being our primary dealer for the garage doors we install, we highly recommend them and their products. Their vast selection usually satisfies our customers but we also do business with Amarr, Delden and a couple other local dealers. </p>
        <p className='text-lg p-3 sm:text-sm'>For openers we primarily use Liftmaster, Chamberlain, Genie, Craftsman and Linear, although we will install <span className='underline decoration-red-800 font-medium'>almost any</span> opener that you want. </p>
        <p className='text-lg p-3 sm:text-sm'>Liftmaster offers lifetime warranties, along with MyQ and Assurelink technology to connect your garage door opener to your cell phone.</p>
      </div>
      <div className='clear-right flex flex-row justify-evenly'>
        {/* <h1 className='text-xl font-medium italic underline decoration-red-800 pt-10 text-center'>Located in Grain Valley, MO</h1> */}
        <img src={GrainValleyMap} className='h-96 sm:h-48' />
        <a className='facebook text-blue-700 pt-12 sm:text-6xl' href='https://www.facebook.com/Carlisleoverheaddoors' target='_blank'><GrFacebook /></a>
      </div>
    </div>
  )
}

export default About