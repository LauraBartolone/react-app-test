import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';

const SwiperCarousel = ({  title, classes = 'swiper--icon-panel', children , type}) => {


  const getOpts = (type) => {
    switch(type) {
      case 'icon-panel': 
        return {
          spaceBetween: 12,
          slidesPerView: 1,
          640: {
            slidesPerView: 2,
          spaceBetween: 12,

          },
          992: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }
      case 'card-image': 
        return {
          spaceBetween: 12,
          slidesPerView: 1,
          640: {
            slidesPerView: 2,
            spaceBetween: 12,

          },
          992: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 12,
          }
        }
    }
   
  }

  let breakpoints = getOpts(type);


  return (
    <div className={`swiper-carousel ${classes}`}>
      {title && <h5 className="swiper-carousel__title">{title}</h5>}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={breakpoints}
      >
       {
       React.Children.map(children, (child, index) => {
        return (
          <SwiperSlide key={'swiper-slide-'+index} className="swiper-slide">
            {child}
          </SwiperSlide>
        );
      })}
      </Swiper>
    </div>
  );
  };
  
  export default SwiperCarousel;