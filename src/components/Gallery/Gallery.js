import React from 'react'
import GalleryPics from './GalleryData'
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {


    return (
        <div className='backdrop-blur min-h-screen'>
            <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2'>Gallery</h1>
            <div className='pt-9 pb-12'>
                <Carousel
                    emulateTouch={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showThumbs={false}
                    className='test'
                >
                    {GalleryPics.map((item, index) => {
                        return (
                            <div className='w-full' key={index}>
                                <img src={item.imgSrc} className='rounded-lg' alt='Gallery Picture' />
                            </div>
                        )
                    })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Gallery