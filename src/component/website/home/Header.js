import React from "react";
import Hero from "../../../asset/images/ImageHero.png";
import Circle from "../../../asset/icons/courseCircleIcon.svg";
import GoogleLogo from "../../../asset/icons/GoogleLogo.svg";
import { ArrowForward } from "@mui/icons-material";
import { Box } from "@mui/material";
import { ButtonShared } from "../../shared/Button";
import { colors } from "../../shared/Colors";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Box className="header-left">
        <div className="header-content">
          <h5>Be all you can be</h5>
          <h1>
            Nuture your skills. Track your progress. Network{" "}
            <span
              style={{
                color: colors.reserveTextColor,
              }}
            >
              and
            </span>{" "}
            grow.
          </h1>
          <p>
            Personalized career guidance, track your education and skills, get
            trained through projects, paid internships and assigned mentors
          </p>
          <a href="https://forms.gle/fD3U7QsrUykE8aFd9" target="_blank">
            <ButtonShared
              text="JOIN VIP ACCESS"
              color={colors.primaryWhite}
              background={colors.primary}
              width={"216px"}
              fontWeight="600"
              fontSize={"16px"}
            />
          </a>
        </div>
        <div className="header-faded"></div>
      </Box>
      <Box className="header-right">
        <img src={Hero} alt="Hero" className="header-hero-img" />
        {/* <Box className="course-absolute-card">
          <Box className="header-right-top">
            <img src={GoogleLogo} alt="google logo" />
            <div className="">
              <h4>Data Analyst</h4>
              <p>Google</p>
              <p>Full-time . Intermediate</p>
            </div>
            <div className="" style={{ marginLeft: "34px" }}>
              <Box className="header-right-top-progress">95%</Box>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Matched{" "}
                <ArrowForward style={{ width: "12px", marginLeft: "4px" }} />
              </p>
            </div>
          </Box>
          <Box className="header-right-middle">
            <img src={Circle} alt="" />
            <div className="">
              <p>Projects that helped you build these skills</p>
              <p>Working on user research at Anutio</p>
              <p>Product design internship at Anutio</p>
            </div>
          </Box>
          <Box className="header-right-bottom">
            <ButtonShared
              text="Apply Now"
              color={colors.primaryWhite}
              background={colors.secondaryBtnBgColor}
              width={"65px"}
              fontWeight="500"
              fontSize={"10px"}
              borderRadius={"8px"}
              height="26px"
            />
          </Box>
        </Box> */}
        {/* <Box className="course-absolute-card-status">
          <div className="course-absolute-card-status1">
            <div className="">
              <h4>0%</h4>
              <p>Not Started</p>
            </div>
          </div>
          <div className="course-absolute-card-status2">
            <div className="">
              <h4>59%</h4>
              <p>Work in Progress</p>
            </div>
          </div>
          <div className="course-absolute-card-status3">
            <div className="">
              <h4>63%</h4>
              <p>Pending</p>
            </div>
          </div>
        </Box> */}
      </Box>
    </header>
  );
}

export default Header;
