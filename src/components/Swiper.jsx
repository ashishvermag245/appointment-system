import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel,Keyboard } from 'swiper/modules';

const slideData = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/128/476/476863.png",
    title: "Efficient Project Planning & Execution",
    description: "We streamline the design process with technology, ensuring a smooth and hassle-free experience."
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/128/1055/1055646.png",
    title: "Quality Assurance",
    description: "We maintain high standards to deliver the best results for our clients."
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/128/4140/4140037.png",
    title: "Customer Satisfaction",
    description: "Our top priority is ensuring that our clients are satisfied with our services."
  },
  {
    id: 4,
    image: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    title: "Customer Satisfaction",
    description: "Our top priority is ensuring that our clients are satisfied with our services."
  },
  {
    id: 5,
    image: "https://cdn-icons-png.flaticon.com/128/1256/1256650.png",
    title: "Customer Satisfaction",
    description: "Our top priority is ensuring that our clients are satisfied with our services."
  }
];

function SwiperComponent() {
  return (
    <div className="choose_us_swiper">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        mousewheel={false}
        keyboard={true}
        loop={true}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="choose_us_content">
              <img src={slide.image} alt={slide.title} />
              <h5>{slide.title}</h5>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
