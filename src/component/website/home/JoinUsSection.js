import { Box } from "@mui/material";
import React from "react";
import IMG from "../../../asset/images/LandingPageImage1.png";
import IMG2 from "../../../asset/images/LandingPageImage2.png";
import { ButtonShared } from "../../shared/Button";
import { colors } from "../../shared/Colors";

function JoinUsSection() {
  return (
    <>
      <section className="join-us-wrapper">
        <div className="join-us-img-wrapper">
          <img src={IMG} alt="student and staffs" />
        </div>
        <Box className="join-us-content-wrapper">
          <h6>Why Join Anutio</h6>
          <h2>Unlock great Opportunities</h2>
          <p>
            Anutio provides you evidence of what you are truly great at and
            align your career path to your life priorities and your unique
            personality. We offer you a one-stop-solution to identify your
            transferable skills and the various lucrative career pathways you
            never knew existed, track your progress, and compile your career
            achievements on the go.
          </p>
          <ButtonShared
            text="Join Us today"
            color={colors.primaryWhite}
            background={colors.primary}
            width={"169px"}
            fontWeight="600"
            fontSize={"16px"}
          />
        </Box>
      </section>
      <section className="join-us-wrapper">
        <Box className="join-us-content-wrapper join-us-content-wrapper-mobile">
          <h6>Level the playing field as an employer.</h6>
          <h2>Contribute to Community growth</h2>
          <p>
            As an employer, we help you ease your recruitment process by
            matching you with great minds and diverse talents that you have been
            missing out on because you could not reach them.
          </p>
        </Box>
        <div className="join-us-img-wrapper join-us-img-wrapper-mobile">
          <img src={IMG2} alt="student ans staffs" />
        </div>
      </section>
    </>
  );
}

export default JoinUsSection;
