import React, {useEffect}  from 'react'
import './main.css'
import img from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance,Bora Bora is one of the best travel destinations in the world. This place is known for its luxorious stays and adventurous activities.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu-Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great-Barrier-Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Coppodocio',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Dubai',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Sri-lanka',
    location: 'Srilanka',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Cimonata',
    location: 'Bangladesh',
    grade: 'CULTURAL RELAX',
    fees: '$2000',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Aurora-borealis',
    location: 'Norway',
    grade: 'CULTURAL RELAX',
    fees: '$1200',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },

  {
    id:10,
    imgSrc: img10,
    destTitle: 'batossa',
    location: 'Germany',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Huayna picchu is a mountain in peru, rising over machu-picchu,the so called lost city of Incas.This place is popular among tourists as the sunrise from the Sun gate is simply spectacular.'
  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  return (
     <section className='main container section'>
          <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
              Most visited destinations
            </h3>
          </div>

          <div className="secContent grid">
              {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                     return(
                      <div key={id} data-aos="fade-up" className="singleDestination">
                         <div className="imageDiv">
                          <img src={imgSrc} alt={destTitle} />
                         </div>

                         <div className="cardInfo">
                          <h4 className="destTitle">{destTitle}</h4>
                          <span className="continent flex">
                          <HiOutlineLocationMarker className="icon"/>
                          <span className="name">{location}</span>
                          </span>


                          <div className="fees flex">
                            <div className="grade">
                              <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                              <h5>fees</h5>
                            </div>
                          </div>

                          <div className="desc">
                            <p>{description}</p>
                          </div>

                          <button className='btn flex'>
                            DETAILS <HiOutlineClipboardCheck className="icon"/>
                          </button>
                         </div>


                      </div>
                     )
                })
              }
          </div>
     </section>
  )
}

export default Main