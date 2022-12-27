import React from 'react'
import Marquee from "react-fast-marquee";
import Delden from '../../assets/img/Delden-Official-Logo.jpg'
import Liftmaster from '../../assets/img/liftmaster.png'
import Clopay from '../../assets/img/clopay.png'
import Craftsman from '../../assets/img/Craftsman-Logo.png'
import Amarr from '../../assets/img/Amarr.jpg'
import Genie from '../../assets/img/Genie.png'
import Haas from '../../assets/img/Haas-Door-Logo.png'
import Chamberlain from '../../assets/img/Chamberlain-Logo.png'


const LogoSlider = () => {
    return (
        <div className='bg-white'>
            <Marquee gradient={false}>
                <a href='https://www.liftmaster.com/' target='_blank'><img className='logoSlider' src={Liftmaster} /></a>
                <a href='https://www.deldengaragedoor.com/' target='_blank'><img className='logoSlider' src={Delden} /></a>
                <a href='https://www.clopaydoor.com/' target='_blank'><img className='logoSlider' src={Clopay} /></a>
                <a href='https://www.craftsman.com/products/workspace/garage' target='_blank'><img className='logoSlider' src={Craftsman} /></a>
                <a href='https://www.amarr.com/us/en' target='_blank'><img className='logoSlider' src={Amarr} /></a>
                <a href='https://www.geniecompany.com/' target='_blank'><img className='logoSlider' src={Genie} /></a>
                <a href='https://www.haasdoor.com/' target='_blank'><img className='logoSlider' src={Haas} /></a>
                <a href='https://www.chamberlain.com/' target='_blank'><img className='logoSlider' src={Chamberlain} /></a>
            </Marquee>
        </div>
    )
}

export default LogoSlider