import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Container } from 'react-bootstrap';
import { Navigation} from "swiper";
export default function Categories({category}) {
  return (
    <>
    <section className='products my-5'>
    <Container >
      <h2 className='  h5 mb-4 fw-bold '>Main Categories</h2>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30.5}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 3.3,
            spaceBetween: 30.3,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 40.5,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={Navigation}
        className="mySwiper"
      >
   
 {Object.values(category?.results || {}).map(item => (
 <SwiperSlide key={item.id} className='productsSlider text-center' >



<img  src={item.image} alt="" />
<h6 className='mt-2'>{item.name}</h6>



 </SwiperSlide>

))}

       
   
      </Swiper>
      </Container>
     <div className='mt-5'>
     <img className='w-100 ' src="/category.png" alt="" />
     </div>
    </section>
    </>
  )
}
