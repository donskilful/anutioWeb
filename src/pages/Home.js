import React from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "../component/PageLayout";
import AboutUsSection from "../component/website/home/AboutUsSection";
import CareerSection from "../component/website/home/CareerSection";
import ContactUsSection from "../component/website/home/ContactUsSection";
import Header from "../component/website/home/Header";
import JoinUsSection from "../component/website/home/JoinUsSection";
import UsersSection from "../component/website/home/UsersSection";

function Home() {
  return (
    <PageLayout>
      <Helmet>
        <title> Home | Anutio</title>
      </Helmet>
      <Header />
      <CareerSection />
      <JoinUsSection />
      <UsersSection />
      <AboutUsSection />
      <ContactUsSection />
    </PageLayout>
  );
}

export default Home;
