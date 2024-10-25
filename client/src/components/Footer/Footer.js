import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      Made with <HeartTwoTone twoToneColor="#eb2f96" /> By{" "}
      <a
        className="footer__link"
        href="https://github.com/mihir0699/Eunica-Band-Messenger"
        target="_blank"
        style={{ color: "#fdfdfd" }}
        rel="noreferrer"
      >
        Eunica Band Team
      </a>
    </footer>
  );
};

export default Footer;
