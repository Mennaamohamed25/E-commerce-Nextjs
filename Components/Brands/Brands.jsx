import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Container } from 'react-bootstrap';
import { Navigation} from "swiper";
//import css
import styles from  "../../styles/Brands.module.css"

export default function Brands({brands}) {
  return (
   <>
       <section className='products'>

    <Container >
      <h2 className='  h5 mb-4 fw-bold '>Popular Brands</h2>
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
        className="mySwiper "
      >
   
 {Object.values(brands?.results || {}).map(brand => (
 <SwiperSlide key={brand.id} className={`productsSlider text-center ${styles.menna}`} >



<div className={styles.brandBg}>
<img  src={brand.image} alt="" />

</div>
<h6 className='mt-2'>Up to {brand.sale_percentage}%</h6>



 </SwiperSlide>

))}

       
   
      </Swiper>
      </Container>
      <div className='mt-5'>
     <img className='w-100 ' src="/brand.png" alt="" />
     </div>
    </section>
   </>
  )
}
