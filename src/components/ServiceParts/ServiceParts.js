import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Img16 from '../../assets/img/GalleryPics/Img16.jpg'
import Img18 from '../../assets/img/GalleryPics/Img18.jpg'

const ServiceParts = () => {
  return (
    <div className='text-center pt-5 font-medium'>
            <div className='pb-10 w-4/5 m-auto text-white'>
                <p className=''>Carlisle Overhead Doors & Services offers emergency service 24 hours a day 7 days a week. </p>
                <p>Rather you accidentally back into your garage door, or you simply need a new opener, we have you covered. Our experienced technician will come out and inspect your garage door and opener and then recommend the necessary path forward. Sometimes you may just need parts to get your garage door working as expected, we offer new parts for your garage door and a lot of the time have what you need on our truck. Don't hesitate to contact us at <a href='tel:816-288-3574' className='text-red-700 underline cursor-pointer'>816-288-3574</a></p>
            </div>

            <Carousel emulateTouch={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img className='' src={Img16}></img>
                    <p className="legend">Local Firestation accidentally hit their door with an ambulance</p>
                </div>
                <div>
                    <img className='' src={Img18}></img>
                    <p className="legend">Local Kansas City Menards service call</p>
                </div>
            </Carousel>
        </div>
  )
}

export default ServiceParts