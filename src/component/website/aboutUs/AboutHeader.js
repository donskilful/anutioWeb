import { Box } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Hero from "../../../asset/images/AboutImageHero.png";
import { colors } from "../../shared/Colors";

function AboutHeader() {
  const tablet = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <header className="header about-us-header">
      <Box className="header-left about-us-header-left">
        <div className="header-content about-us-header-left-content">
          <h5>About US</h5>
          <h1>
            With Anutio <br /> Be all{" "}
            <span
              style={{
                color: colors.reserveTextColor,
              }}
            >
              you
            </span>{" "}
            be can be
          </h1>
          <p>
            Personalized career guidance, track your education and skills, get
            trained through projects, paid internships and assigned mentors
          </p>
        </div>
        {tablet && <div className="header-faded"></div>}
      </Box>
      <Box className="header-right">
        <img
          src={Hero}
          alt="Hero"
          className="header-hero-img about-us-hero-img"
        />
      </Box>
      {!tablet && <div className="header-about-faded"></div>}
    </header>
  );
}

export default AboutHeader;
