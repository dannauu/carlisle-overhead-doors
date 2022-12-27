import React from 'react'
import asdf from '../../assets/img/residential.jpg'


const About = () => {
  return (
    <div className='h-screen backdrop-blur-md'>
      <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2'>About Us</h1>
      <h2 className='text-center pt-10 text-xl font-medium italic'>Serving the Kansas City Metro and surrounding areas since 2007.</h2>
      <img src={asdf} className='h-80 float-left p-5' />
      <p className='text-lg p-5'>We are a locally owned and operated company serving the entire Kansas City Metro Area. Our technicians have several years of experience with garage door work and they work hard to use that experience to provide you with the best service possible. We strive not to be the biggest company but the best with a strong focus on our customers. We work to provide the customer with the highest quality of products and always put the customer’s needs and desires first. When we say Quality and Integrity we truly mean it. These are values we not only try to run our company with but also live by.</p>
      <p className='p-1 text-lg'>Our primary supplier is Clopay Door, which has a vast line of garage doors. Clopay’s unique designs, from short elegant panels to wood grain to carriage style doors, will fit the need of any garage door install and replacement.</p>
      <p className='p-1 text-lg'>Chamberlain Liftmaster garage door openers come in a variety designs to best fit your needs.</p>
      <p className='p-1 text-lg'>They also offer lifetime warranties, new designs with added security and accessories and openers with the MyQ and Assurelink technology to connect your garage door opener to your cell phone.</p>
      <p className='p-1 text-lg'>I’d like to take a minute to tell you a few things you can do to help maintain your own garage door. Your garage door should run smoothly and quietly. Over time the parts on a door will wear down. If you can’t open your door easily with one hand up and back down its time to invest a little money to maintain your door and extend the life of your opener. Springs, rollers, and bearing plates wear down, cables fray and door panels can only take so many bumps before they interfere with the doors operation. Over the years the springs need tuned up and tightened. All those moving parts on a garage door and opener need lubricated multiple times year. In a perfect world openers would last forever but with heavy, rough moving doors, the gears wear out and circuit boards burn up. Don’t forget about the safety eyes; keep them lined up, bolts tight and those little lights on.</p>
      
    </div>
  )
}

export default About