import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";
//import css
import styles from  "../../styles/Carousel.module.css"



export default function Carousel({posts}) {
  console.log(posts);
 
  return (
    <>  
<section className="carousel">

 <Swiper 
 autoHeight={true}
 spaceBetween={20}
 navigation={true}
 pagination={{
   clickable: true,
 }}
 modules={[Navigation, Pagination]}
 className={`mySwiper${styles.swiper}`}
>
{Object.values(posts?.results || {}).map(post => (
 <SwiperSlide key={post.id} >
  <div className={styles.imgStyle}>

  <img className={styles.swiperImg} src={post.image} alt="logo" />
  </div>
 </SwiperSlide>
))}
</Swiper>


</section>

  </>
  )
}

