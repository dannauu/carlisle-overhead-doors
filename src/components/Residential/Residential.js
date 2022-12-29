import React from 'react'
import Img1 from '../../assets/img/GalleryPics/Img1.jpg'
import Img4 from '../../assets/img/GalleryPics/Img4.jpg'
import Img7 from '../../assets/img/GalleryPics/Img7.jpg'
import { Carousel } from 'react-responsive-carousel';

const Residential = () => {
    return (
        <div className='text-center pt-5 font-medium'>
            <div className='pb-10 w-4/5 m-auto'>
                <p className=''>Whether you are looking to update your homes garage doors to add resale value, and or just because it simply needs done, Carlisle Overhead Doors & Services has you covered.</p>
                <p>We offer Clopay, Amarr, Delden and a few other door manufactures for installation, we prefer to use Clopay as we have found the best quality and over all service from them. Feel free to take a look at some pictures of some residential installs we have completed using Clopay!</p>
                <p>Don't forget to check out <a href='https://www.clopaydoor.com/residential-garage-doors' target='_blank' className='underline text-blue-500 hover:text-blue-900'>Clopay's </a>website to browse and even build your own custom door.</p>
            </div>

            <Carousel emulateTouch={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img className='' src={Img1}></img>
                    <p className="legend">New Construction with Clopay Standard Doors (9'x 8')</p>
                </div>
                <div>
                    <img className='' src={Img4}></img>
                    <p className="legend">Clopay Hinge Doors (9' x 8')</p>
                </div>
                <div>
                    <img className='' src={Img7}></img>
                    <p className="legend">Clopay Double Insulated Steel (12' x 10')</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Residential