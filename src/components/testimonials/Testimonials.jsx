import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avartar1.jpg";
import AVTR2 from "../../assets/avartar2.jpg";
import AVTR3 from "../../assets/avartar3.jpg";
import AVTR4 from "../../assets/avartar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: "Google DSC",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dui id mi dignissim posuere feugiat vitae eros. Fusce vitae neque sit amet enim iaculis placerat eget et est. Integer.",
  },
  {
    avatar: AVTR2,
    name: "TedX",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dui id mi dignissim posuere feugiat vitae eros. Fusce vitae neque sit amet enim iaculis placerat eget et est. Integer.",
  },
  {
    avatar: AVTR3,
    name: "Scalar",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dui id mi dignissim posuere feugiat vitae eros. Fusce vitae neque sit amet enim iaculis placerat eget et est. Integer.",
  },
  {
    avatar: AVTR4,
    name: "Software Development Student Club",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec dui id mi dignissim posuere feugiat vitae eros. Fusce vitae neque sit amet enim iaculis placerat eget et est. Integer.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Community participation</h5>
      <h2>Volunteering</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <div>
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
