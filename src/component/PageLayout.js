import React from "react";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
