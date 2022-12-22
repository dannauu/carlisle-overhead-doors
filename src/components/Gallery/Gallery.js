import React from 'react'

const Gallery = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div id='gallery'>
            <h1 className='text-black font-semibold text-4xl text-center pt-10'>Gallery</h1>
            <div className='mt-10 mb-10'>
                <div className={model ? "model open" : "model"}>
                    <img src={tempimgSrc} alt='' />
                    <AiOutlineClose onClick={() => setModel(false)} />
                </div>
                <div className='gallery'>
                    {GalleryData.map((item, index) => {
                        return (

                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                    <img src={item.imgSrc} className='galleryImg' alt='' />

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