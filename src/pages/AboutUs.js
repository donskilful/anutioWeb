import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "../component/PageLayout";
import AboutHeader from "../component/website/aboutUs/AboutHeader";
import MissionSection from "../component/website/aboutUs/MissionSection";
import TeamMembers from "../component/website/aboutUs/TeamMembers";
import WhoWeAreSection from "../component/website/aboutUs/WhoWeAreSection";
import ContactUsSection from "../component/website/home/ContactUsSection";
import "../css/about.css";

function AboutUs() {
  return (
    <PageLayout>
      <Helmet>
        <title> About Us | Anutio</title>
      </Helmet>
      <AboutHeader />
      <MissionSection />
      <WhoWeAreSection />
      <TeamMembers />
      <ContactUsSection />
    </PageLayout>
  );
}

export default AboutUs;
