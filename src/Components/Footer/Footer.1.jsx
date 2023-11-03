import React from "react";
import logo from "./photo.svg";
import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="kontact">
                    <em>Наши контакты :</em>
                    <span><FaPhone size="1rem" /> +78005353555</span>
                    <span><FaTelegram size="2rem" /></span>
                    <span><FaWhatsapp size="2rem" /></span>
                </div>
                <div className="size">
                    <img className="size-logo" width={60} height={60} src={logo} alt="" />
                </div>
            </div>
        </footer>
    );
};
export default Footer;
