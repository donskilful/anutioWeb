import { Box } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";

function Card({ icon, text, text2 }) {
  return (
    <Box className={"custom-card-card-wrapper"}>
      <div className="home-card-icon-wrapper">{icon}</div>
      <h4>{text}</h4>
      <p>{text2}</p>
    </Box>
  );
}

export default Card;
