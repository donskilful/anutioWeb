import { Box } from "@mui/material";
import React from "react";
import Founder from "../../../asset/images/founderImage.png";
import { ButtonShared } from "../../shared/Button";
import { colors } from "../../shared/Colors";

function WhoWeAreSection() {
  return (
    <>
      <section className="who-we-are-wrapper">
        <Box className="who-we-are-cards-wrapper">
          <div className="who-we-are-light-card">
            <p>
              Borne out of passion to see people experience true career
              fulfillment. Running with the mission to empower people with data
              and tools to build successful and fulfilling career. At Anutio we
              nuture leadership, growth and community.
            </p>
            <p>
              Anutio is more than another career platform, we give you a place
              where you can have it all, a work life balance, career growth with
              ease. We bring to you people who can help you attain your dreams.{" "}
              <br />A platform that rekindles passion. Imaagine getting exactly
              what you want the way you want it. Have you been wondering what
              your next step is, or have you been overwhelmed trying to figure
              it out? Then Anutio is the right place for you. Be all you can be
              with Anutio
            </p>
          </div>
          <div className="who-we-are-card-top">
            <Box className="who-we-are-heading">
              <h6 style={{ color: colors.reserveTextColor }}>Who we are</h6>
              <h2>There is more to us...</h2>
            </Box>
            <div className="who-we-are-deep-card">
              <h4>who are we for?</h4>

              <p>
                Achieve your goals with us, irrespective of where you are on the
                career ladder{" "}
              </p>

              <ul className="">
                <li>For Students</li>
                <li>For Professionals</li>
                <li>For Business Owners and Startups</li>
                <li>For Organizations</li>
              </ul>
            </div>
          </div>
        </Box>
      </section>

      <section
        className="join-us-wrapper"
        style={{
          margin: "48px 0px 100px 0px",
        }}
      >
        <div className="join-us-img-wrapper join-us-img-wrapper-mobile">
          <img src={Founder} alt="our founder" />
        </div>
        <Box className="join-us-content-wrapper join-us-content-wrapper-mobile">
          <h6 style={{ color: colors.reserveTextColor }}>Our Founder</h6>
          <h2>Contribute to Community growthUnlock great Opportunities</h2>
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
    </>
  );
}

export default WhoWeAreSection;
