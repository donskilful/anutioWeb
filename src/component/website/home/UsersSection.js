import { Box } from "@mui/material";
import React from "react";
import Student from "../../../asset/icons/LandingPageStudentUserIcon.svg";
import Business from "../../../asset/icons/LandingPageStartUpIcon.svg";
import Professional from "../../../asset/icons/LandingPageProfessionalIcon.svg";
import Organization from "../../../asset/icons/LandingPageOrganizationIcon.svg";

function UsersSection() {
  const cardItems = [
    {
      text: "Students",
      icons: Student,
    },
    {
      text: "Professionals",
      icons: Professional,
    },
    {
      text: "Business owners and Start ups",
      icons: Business,
    },
    {
      text: "Organizations",
      icons: Organization,
    },
  ];
  return (
    <section className="our-user-section-wrapper">
      <Box className="our-user-section-top">
        <h6>Who are our users?</h6>
        <h2>There is room for everyone</h2>
      </Box>
      <Box className="our-user-section-bottom">
        {cardItems.map((item, key) => (
          <Box key={key} className="our-user-cards-wrapper">
            <div className="home-card-icon-wrapper home-card-user-icon-wrapper">
              <img src={item.icons} alt="icon" />
            </div>
            <p>{item.text}</p>
          </Box>
        ))}
      </Box>
    </section>
  );
}

export default UsersSection;
