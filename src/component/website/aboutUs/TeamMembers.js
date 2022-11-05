import { Box } from "@mui/material";
import React from "react";
import { AccessTime, CropFree, People, PersonPin } from "@mui/icons-material";
import Card from "../../shared/Card";
import { colors } from "../../shared/Colors";

function TeamMembers() {
  const cardItems = [
    {
      text: "Capture Achievement",
      text2:
        "Create impactful description of your experience using our STAR model",
      icons: <CropFree className="home-card-icon" />,
      text3: "teessvjnjnnokfnvk mn",
    },
    {
      text: "Track your Progess",
      text2: "Get hands-on experience andrelevant tips for career growth",
      icons: <AccessTime className="home-card-icon" />,
    },
    {
      text: "Get Help",
      text2:
        "Layer on the power of community, get assigned mentors,interview prep and training to bridge any skill gap",
      icons: <PersonPin className="home-card-icon" />,
    },
  ];
  return (
    <section>
      <Box className="our-user-section-top">
        <h6 style={{ color: colors.reserveTextColor }}>Our People </h6>
        <h2>meet our amazing team</h2>
      </Box>
      <Box
        className="cards-wrapper"
        sx={{
          padding: "0px 80px",
          gap: "20px",
        }}
      >
        {cardItems.map((item, key) => (
          <Card
            key={key}
            text={item.text}
            icon={item.icons}
            text2={item.text2}
          />
        ))}
      </Box>
    </section>
  );
}

export default TeamMembers;
