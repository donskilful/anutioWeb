import React from "react";
import { colors } from "../../shared/Colors";
import Phone from "../../../asset/images/LandingPageImage4.png";
import Arrow from "../../../asset/images/LandingPageArrowImage.png";
import Apple from "../../../asset/icons/AppStore.svg";
import Google from "../../../asset/icons/GooglePlay.svg";
import { ButtonShared } from "../../shared/Button";
import { Typography } from "@mui/material";

function ContactUsSection() {
  return (
    <section className="contact-us-section">
      <div className="contact-us-section-top">
        <div className="contact-us-section-top-left">
          <img src={Phone} alt="phone" width={"100%"} />
        </div>
        <div className="contact-us-section-top-right">
          <h5>Download Anutio App</h5>
          <h2>Why the wait!</h2>
          <p>
            You can now capture your achievements and track your progress on the
            go{" "}
          </p>
          <div className="contact-us-section-top-right-img-wrapper">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={Apple}
                alt="apple store logo"
                className="contact-us-section-top-right-img"
              />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src={Google}
                alt="google play store logo"
                className="contact-us-section-top-right-img"
              />
            </a>
          </div>

          <img
            src={Arrow}
            alt="arrow"
            className="contact-us-section-top-right-arrow"
          />
        </div>
        <div className="contact-section-faded"></div>
      </div>
      <div className="contact-us-section-bottom">
        <h2>Let’s get you started </h2>
        <Typography
          variant="p"
          sx={{
            color: colors.primaryWhite,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Anutio has what it takes to help you be all you want to be <br />
          <br />
          Let’s get you started
        </Typography>
        <ButtonShared
          text="Contact Us"
          color={colors.primary}
          background={colors.primaryWhite}
          width={"216px"}
          fontWeight="600"
          fontSize={"16px"}
        />
      </div>
    </section>
  );
}

export default ContactUsSection;
