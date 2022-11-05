import { Box } from "@mui/material";
import React from "react";
import IMG from "../../../asset/images/LandingPageImage3.png";
import { ButtonShared } from "../../shared/Button";
import { colors } from "../../shared/Colors";

function AboutUsSection() {
  return (
    <>
      <section className="join-us-wrapper">
        <div className="join-us-img-wrapper">
          <img src={IMG} alt="laptop" />
        </div>
        <Box className="join-us-content-wrapper">
          <h6>About Us</h6>
          <h2>There is more to us...</h2>
          <p>
            Borne out of passion to see people experience true career
            fulfillment. Running with the mission to empower people with data
            and tools to build successful and fulfilling career. At Anutio we
            nuture leadership, growth and community...
          </p>
          <ButtonShared
            text="Read  More"
            color={colors.primaryWhite}
            background={colors.primary}
            width={"169px"}
            fontWeight="600"
            fontSize={"16px"}
          />
        </Box>
      </section>

      <section className="motivation-section">
        <div className="motivation-section-content-wrapper">
          <p>
            <span>A</span>spire
          </p>
          <ul>
            <li>Aspire to career success as grand as your imaginations. </li>
            <li> No more limits to your career growth, Be All You Can Be.</li>
          </ul>
        </div>
        <div className="motivation-section-content-wrapper">
          <p>
            <span>N</span>uture
          </p>
          <ul>
            <li>
              Nurture your dreams and your natural abilities to blossom with
              hands-on experience.
            </li>
            <li>
              {" "}
              Build career confidence, connect with a global community of peers,
              coaches, mentorsand a mobile app with AI-powered personalized
              career advise tailored to your unique interests and personality.
            </li>
          </ul>
        </div>
        <div className="motivation-section-content-wrapper">
          <p>
            <span>U</span>nleash
          </p>
          <ul>
            <li>
              Unleash your genius to the world. Unlock your hidden potentials
            </li>
            <li>
              Break barriers. Build, connect, learn, grow. Excel in whatever
              path you choose.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutUsSection;
