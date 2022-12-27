import React from 'react'
import GalleryPics from './GalleryData'

const Gallery = () => {


    return (
        <div className='backdrop-blur'>
            <h1 className='text-center text-white text-3xl font-medium googleFont bg-black/60 p-2'>Gallery</h1>
            <div className=''>
                <div className='grid grid-cols-8 gap-4 p-4'>
                    {GalleryPics.map((item, index) => {
                        return (
                            <div className='w-full' key={index}>
                                <img src={item.imgSrc} className='rounded-lg' alt='Gallery Picture' />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery