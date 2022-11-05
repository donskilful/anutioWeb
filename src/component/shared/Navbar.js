import { Menu } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Logo from "../../asset/icons/Logo.svg";
import SideDrawer from "../SideDrawer";
import { ButtonShared } from "./Button";
import { colors } from "./Colors";

function Navbar() {
  const tablet = useMediaQuery({ query: "(max-width: 900px)" });

  const [active, setActive] = useState(false);
  let links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
  ];
  const [scroll, setScroll] = useState(false);

  const handleScroll = (e) => {
    e.preventDefault();
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue) {
      if (scrollValue > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={scroll ? "nav nav-scroll" : "nav"}>
      <Box className="nav-img-wrapper">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "45px", height: "45px" }}
          />
        </Link>
      </Box>

      {tablet ? (
        <div className="menu" onClick={() => setActive(true)}>
          <Menu sx={{ width: "45px", height: "45px" }} />
        </div>
      ) : (
        <ul className="nav-item">
          <Link to="/about-us">
            <li className="nav-item-items">About Us</li>
          </Link>
          {/* <li className="nav-item-items">About Us</li> */}
          {/* <li className="nav-item-items">About Us</li> */}
          <a href="https://forms.gle/fD3U7QsrUykE8aFd9" target="_blank">
            <ButtonShared
              text="JOIN EARLY ACCESS"
              color={colors.primaryWhite}
              background={colors.primary}
              width={"216px"}
              fontWeight="700"
              fontSize={"16px"}
            />
          </a>
        </ul>
      )}

      {/* Side bar Menu */}
      <SideDrawer setActive={setActive} active={active} />
    </nav>
  );
}

export default Navbar;
