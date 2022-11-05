import { Box } from "@mui/material";
import React from "react";
import IMG2 from "../../../asset/images/LandingPageImage1.png";
import IMG from "../../../asset/images/AboutImage1.png";
import Card from "../../shared/Card";
import { AccessTime, CropFree, People, PersonPin } from "@mui/icons-material";

function MissionSection() {
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
    // {
    //   text: "Internship",
    //   text2: "Get assigned to paid internship that meets your schedule",
    //   icons: <People className="home-card-icon" />,
    // },
  ];
  return (
    <>
      <section className="join-us-wrapper">
        <div className="join-us-img-wrapper">
          <img src={IMG} alt="student and staffs" />
        </div>
        <Box className="join-us-content-wrapper">
          <h2>Our Mission</h2>
          <p>
            It is our mission at Anutio to empower people with data and tools to
            build joyful and fulfilling careers. We believe you can achieve your
            goals, grow your career and attain career fulfilment. And,we are
            here to help you make it happen through the power of data and
            community. If each one could reach one, then each one could teach
            one... Chaz B (Charles Bruce Chukuma - 2014)
          </p>
        </Box>
      </section>
      <section className="join-us-wrapper">
        <Box className="join-us-content-wrapper join-us-content-wrapper-mobile">
          <h2> What we do</h2>
          <p>
            Anutio provides you evidence of what you are truly great at and
            align your career path to your life priorities and your unique
            personality. We offer you a one-stop-solution to identify your
            transferable skills and the various lucrative career pathways you
            never knew existed, track your progress, and compile your career
            achievements on the go.
          </p>
        </Box>
        <div className="join-us-img-wrapper join-us-img-wrapper-mobile">
          <img src={IMG2} alt="student ans staffs" />
        </div>
      </section>

      <section>
        <h2>What makes us different</h2>
        <Box className="cards-wrapper">
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
    </>
  );
}

export default MissionSection;
