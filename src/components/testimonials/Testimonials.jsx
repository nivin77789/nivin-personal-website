import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avartar1.jpg";
import AVTR2 from "../../assets/avartar2.jpg";
import AVTR3 from "../../assets/images.jpeg";
import AVTR4 from "../../assets/avartar3.jpg";

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
    review:"Volunteered to support event planning, coordination, and technical sessions. Assisted in managing participant registrations, engaging with attendees, and promoting Google Cloud technologies. Helped create a collaborative environment for knowledge sharing among developers and tech enthusiasts."
     },
  {
    avatar: AVTR2,
    name: "TedX",
    review:"Designed promotional materials, event banners, and social media graphics to maintain TEDx branding standards. Worked closely with event organizers to create visually appealing content that enhanced audience engagement and overall event experience."
  },
  {
    avatar: AVTR3,
    name: "Scalar",
    review:"Assisted in organizing community meetups and networking events. Managed registrations, coordinated with speakers, and ensured smooth event flow. Helped create a welcoming atmosphere for participants to connect, learn, and share ideas."
      },
  {
    avatar: AVTR4,
    name: "Software Development Student Club",
    review:"Actively contributed to organizing coding workshops, hackathons, and skill-development sessions. Assisted in logistics, participant engagement, and technical setup. Encouraged peer learning and collaboration among members to foster a strong developer community."
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
