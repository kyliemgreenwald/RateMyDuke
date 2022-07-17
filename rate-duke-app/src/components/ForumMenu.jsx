import React from 'react';
import { slide as Menu } from "react-burger-menu";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ForumMenu(props) {
    const toggleMenu = ({ isOpen }) => {
        const menuWrap = document.querySelector(".bm-menu-wrap");
        isOpen
          ? menuWrap.setAttribute("aria-hidden", false)
          : menuWrap.setAttribute("aria-hidden", true);
    };
    return (
        <Menu onStateChange={toggleMenu}>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/about">
            About
          </a>
          <a className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
    );
}