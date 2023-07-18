import React from 'react'
import './Tastimoniles.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    avatar: AVTR1,
    name : 'Tina Snow' ,
    review : 'mahmoud reda mahmodu abdelall elkhour number 1 enshaallla in programing',
    
  },
  {
    avatar: AVTR2,
    name : 'Tina Snow' ,
    review : 'mahmoud reda mahmodu abdelall elkhour number 1 enshaallla in programing',
    
  },
  {
    avatar: AVTR3,
    name : 'Tina Snow' ,
    review : 'mahmoud reda mahmodu abdelall elkhour number 1 enshaallla in programing',
    
  },
  {
    avatar: AVTR4,
    name : 'Tina Snow' ,
    review : 'mahmoud reda mahmodu abdelall elkhour number 1 enshaallla in programing',
    
  }
]








const Tastimoniles = () => {
  return (
    <section id='tastimoniles'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>


    <Swiper className="container testimonials__container"
    // install Swiper modules
    modules={[ Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >

      {
        data.map(({avatar, name , review} , index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
    
              <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='clinet__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
    
            
          </SwiperSlide>
          )
        })
      }

    </Swiper>




    </section>
  )
}

export default Tastimoniles
