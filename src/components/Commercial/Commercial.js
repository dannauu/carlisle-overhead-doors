import React from 'react'
import Img24 from '../../assets/img/GalleryPics/Img24.jpg'
import Img23 from '../../assets/img/GalleryPics/Img23.jpg'
import { Carousel } from 'react-responsive-carousel';

const Commercial = () => {
  return (
    <div className='text-center pt-5 font-medium'>
            <div className='pb-10 w-4/5 m-auto'>
                <p className=''>Need garage doors on your warehouse or industrial size shop? Carlisle Overhead Doors & Services is here to assist you. </p>
                <p>Clopay's lineup of commercial sized garage door equipment is top notch. From their architectural series to polyurenthane insulated steel doors, you can trust that they will b.</p>
                <p>Check out <a rel="noreferrer" href='https://www.clopaydoor.com/commercial-door-products' target='_blank' className='underline text-blue-500 hover:text-blue-900'>Clopay's </a>website to browse their commercial products. Feel free to contact us for a free estimate.</p>
            </div>

            <Carousel emulateTouch={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img className='' src={Img24}></img>
                    <p className="legend">Clopay Hinge Doors (9' x 8')</p>
                </div>
                <div>
                    <img className='' src={Img23}></img>
                    <p className="legend">Clopay Double Insulated Steel (12' x 10')</p>
                </div>
            </Carousel>
        </div>
  )
}

export default Commercial