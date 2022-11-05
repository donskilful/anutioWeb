import React from "react";
import "../../../css/home.css";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Box } from "@mui/material";
import {
  AccessTime,
  CropFree,
  MenuBook,
  People,
  PersonPin,
} from "@mui/icons-material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Illustration1 from "../../../asset/icons/homeCardIllustration1.svg";
import Illustration2 from "../../../asset/icons/homeCardIllustration2.svg";
import Illustration3 from "../../../asset/icons/homeCardIllustration3.svg";
import Illustration4 from "../../../asset/icons/homeCardIllustration4.svg";
import Illustration5 from "../../../asset/icons/homeCardIllustration5.svg";

SwiperCore.use([Pagination, Autoplay]);

function CareerSection() {
  const tablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [hover, setHover] = useState("");
  const cardItems = [
    {
      text: "Capture Achievement",
      text2:
        "Create impactful description of your experience using our STAR model",
      icons: Illustration1,
    },
    {
      text: "Track your Progess",
      text2: "Get hands-on experience andrelevant tips for career growth",
      icons: Illustration2,
    },
    {
      text: "Get Help",
      text2:
        "Layer on the power of community, get assigned mentors,interview prep and training to bridge any skill gap",
      icons: Illustration3,
    },
    {
      text: "Internship",
      text2: "Get assigned to paid internship that meets your schedule",
      icons: Illustration4,
    },
    {
      text: "Scholarship & Resume Review",
      text2:
        "Get guidance on postgraduate study, scholarships and financing, resume review, personal essays and application guidance",
      icons: Illustration5,
    },
  ];
  return (
    <section>
      <div className="career-section-heading">
        <h2>Grow your Career with Anutio</h2>
      </div>

      <Box className="home-cards-wrapper">
        <Box className="home-cards-card">
          {cardItems.slice(0, 3).map((item, key) => (
            <div className="flip-card" key={key}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h4>{item.text}</h4>
                  <img src={item.icons} alt="illustration" />
                </div>

                <div className="flip-card-back">
                  <h4>{item.text}</h4>
                  <p>{item.text2}</p>
                </div>
              </div>
            </div>
          ))}
        </Box>
        <Box className="home-cards-card">
          {cardItems.slice(3, 5).map((item, key) => (
            <div className="flip-card" key={key}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h4>{item.text}</h4>
                  <img src={item.icons} alt="illustration" />
                </div>

                <div className="flip-card-back">
                  <h4>{item.text}</h4>
                  <p>{item.text2}</p>
                </div>
              </div>
            </div>
          ))}
        </Box>
      </Box>
      {/* <Box className="home-cards-wrapper">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          direction={tablet ? "vertical" : "horizontal"}
          autoplay={tablet ? false : true}
          speed={2000}
        >
          {cardItems.map((item, key) => (
            <SwiperSlide
              key={key}
              className={"card-section-card-wrapper"}
              onMouseEnter={() => {
                console.log(key, item);
                setHover(key);
              }}
              onMouseLeave={() => {
                setHover("");
              }}
            >
              <div className="home-card-icon-wrapper">{item.icons}</div>
              <h4>{item.text}</h4>
              <p>{item.text2}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box> */}
    </section>
  );
}

export default CareerSection;
