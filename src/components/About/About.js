import React from 'react'
import asdf from '../../assets/img/residential.jpg'
import { GrFacebook } from 'react-icons/gr'


const About = () => {
  return (
    <div className='h-screen backdrop-blur-md'>
      <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2'>About Us</h1>
      <h2 className='text-center pt-10 text-xl font-medium italic underline decoration-orange-400'>Serving the Kansas City Metro and surrounding areas since 2007.</h2>
      <img src={asdf} className='h-80 float-left p-5' />
      <p className='text-lg p-5'>Carlisle Overhead Doors & Services is a locally owned and operated company serving the Kansas City Metro and surrounding areas. With over 15 years experience we strive to provide the highest quality work and strong focus on our customers needs.</p>
      <p className='p-1 text-lg'>With Clopay being our primary dealer for the garage doors we install, we highly recommend them and their products. Their vast selection usually satisfies our customers but we also do business with Amarr, Delden and a couple other local dealers. </p>
      <p className='p-1 text-lg'>For openers we primarily use Liftmaster, Chamberlain, Genie, Craftsman and Linear, although we will install <span className='underline decoration-red-800 font-medium'>almost any</span> opener that you want. </p>
      <p className='p-1 text-lg'>Liftmaster offers lifetime warranties, along with MyQ and Assurelink technology to connect your garage door opener to your cell phone.</p>
      {/* ADD GRAIN VALLEY MAP IMAGE SOMEWHERE TO SHOW SERVICE AREA */}
      <div className='flex clear-left'>
        <a className='m-auto text-5xl text-blue-700' href='https://www.facebook.com/Carlisleoverheaddoors' target='_blank'><GrFacebook /></a>
      </div>
    </div>
  )
}

export default About