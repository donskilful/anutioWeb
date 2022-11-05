import { Drawer } from "@mui/material";
import React, { useState } from "react";
import Logo from "../asset/icons/Logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { colors } from "./shared/Colors";
import { ButtonShared } from "./shared/Button";

function SideDrawer({ setActive, setActiveLink, active, activeLink }) {
  const navigate = useNavigate();
  let links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
    { title: "Products ", link: "/" },
    { title: "Contact", link: "/" },
  ];

  return (
    <Drawer
      className="drawer"
      anchor="left"
      open={active}
      onClose={() => setActive(false)}
      transitionDuration={1500}
    >
      <div
        style={{ width: "100%", height: "80%", padding: "1rem 1rem" }}
        role="presentation"
      >
        <div className="side_bar_logo_wrapper">
          <img src={Logo} alt="Logo" />
          <Close
            onClick={() => setActive(false)}
            sx={{ width: "45px", height: "45px" }}
          />
        </div>

        <div className="menu_list_items_wrapper">
          <ul className="sidebar_navbar_list">
            {links.map((link, key) => (
              <Link to={link.link} key={key}>
                <li className="sidebar_navbar_list_items">{link.title}</li>
              </Link>
            ))}
            <ButtonShared
              text="JOIN EARLY ACCESS"
              color={colors.primaryWhite}
              background={colors.primary}
              width={"70%"}
              fontWeight="700"
              fontSize={"16px"}
            />
          </ul>
        </div>
      </div>
    </Drawer>
  );
}

export default SideDrawer;
