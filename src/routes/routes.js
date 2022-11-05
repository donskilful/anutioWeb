import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import withRouter from "../component/withRouter";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";

const ScrollToTop = () => {
  const history = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history.pathname]);

  return null;
};

const ResetScroll = withRouter(ScrollToTop);

function routes() {
  return (
    <BrowserRouter>
      <ResetScroll />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
