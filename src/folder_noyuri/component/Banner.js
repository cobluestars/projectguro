// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () =>{


	return(
		<>
		<div className='sec_banner'>
		<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
				<div className='swiper-wrapper'>
				<SwiperSlide className='swiper-slide A'></SwiperSlide>
				<SwiperSlide className='swiper-slide B'></SwiperSlide>
				<SwiperSlide className='swiper-slide C'></SwiperSlide>
				</div>
			</Swiper>
		</div>
	  </>
	);
}

export default Banner;