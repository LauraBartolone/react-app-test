import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

const Reviews = ({title}) => {

  const [isViewportLessThan992, setIsViewportLessThan992] = useState(false);

  let breakpoints ={
    // when window width is >= 640px
    spaceBetween: 12,
    slidesPerView: 1,
    autoHeight: true,
    direction: 'horizontal',
    // when window width is >= 768px
    992: {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 24,
    },
  };

	const [data, setData] = useState([
    {
      rate: 2,
      author: 'Peter Masters',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur blandit, penatibus volutpat malesuada vitae rhoncus ridiculus interdum libero integer, nisi consequat euismod pretium nec tempor porttitor eget. Gravida praesent mattis dis habitant arcu conubia magn'
    },
    {
      rate: 4,
      author: 'Tim Rain',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur blandit, penatibus volutpat malesuada vitae rhoncus ridiculus interdum libero integer, nisi consequat euismod pretium nec tempor porttitor eget. Gravida praesent mattis dis habitant arcu conubia magn'
    },
    {
      rate: 1,
      author: 'Lorem',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur blandit, penatibus volutpat malesuada vitae rhoncus ridiculus interdum libero integer, nisi consequat euismod pretium nec tempor porttitor eget. Gravida praesent mattis dis habitant arcu conubia magn'
    },
    {
      rate: 5,
      author: 'Ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit curabitur blandit, nisi consequat euismod pretium nec tempor porttitor eget. Gravida praesent mattis dis habitant arcu conubia magn'
    }
  ]);

  useEffect(() => {
    // Update the state based on the viewport width when the component mounts
    const handleResize = () => {
      setIsViewportLessThan992(window.innerWidth < 992);
    };

    handleResize(); // Call it once to set the initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (

   <div className="row reviews swiper-carousel">
      <div className="col-12 col-md-3">
        <FormatQuoteRoundedIcon className='reviews__quote-icon' />
        {title && 
        <h5 className='t-headline-1 mb-5 underlined-title'>{parse(title )}</h5>
        }
      </div>
      <div className="col-12 offset-md-1 col-md-8">

        { data.length > 0 && 
          <Swiper
              modules={[Navigation]}
              navigation
              breakpoints={breakpoints}

            >
            { !isViewportLessThan992 ?
            
                data.map((review, index) => {
                  if (index % 2 === 0 && index + 1 < data.length) {
                    return (
                      <SwiperSlide key={`review-${index}`}>
                        <div className="d-flex reviews__group">
                          <div className="reviews__item">
                            <p className='review__description'>
                              {data[index].description}
                            </p>
                            <div className='d-flex'>
                              <Rating
                                readOnly
                                name={`rating-${index}`}
                                value={data[index]?.rate ? data[index]?.rate : 0}
                              />
                              <p className='ms-2'>
                                {data[index]?.author}
                              </p>
                            </div>
                          </div>
                          <div className="reviews__item">
                            <p className='review__description'>
                              {data[index + 1].description}
                            </p>
                            <div className='d-flex'>
                              <Rating
                                readOnly
                                name={`rating-${index + 1}`}
                                value={data[index + 1]?.rate ? data[index + 1]?.rate : 0}
                              />
                              <p className='ms-2'>
                                {data[index + 1]?.author}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  }
                  return null; // Salta gli elementi dispari o gli ultimi elementi
                })
                :
                data.map((review, index) => {
                    return (
                      <SwiperSlide key={`review-${index}`}>
                          <div className="reviews__item">
                            <p className='review__description'>
                              {review.description}
                            </p>
                            <div className='d-flex'>
                              <Rating
                                readOnly
                                name={`rating-${index}`}
                                value={review?.rate ? review?.rate : 0}
                              />
                              <p className='ms-2'>
                                {review?.author}
                              </p>
                            </div>
                          </div>
                      </SwiperSlide>
                    );
                })
            }
        </Swiper>
        }
      </div>
   </div>
  );
};


export default Reviews;