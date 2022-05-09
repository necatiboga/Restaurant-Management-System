import React from "react";
import "./Footer.css";
import NBASLogo from "../assets/logo.png";
import DropDown from "./DropDown";



const footerLinks = [
  {
    title: "Get to Know Us",
    list: ["About NBAS", "Connect with Us", "NBAS Cares", "Gift a Smile"],
  },
  {
    title: "Make Money with Us",
    list: [
      "Sell products on NBAS",
      "Sell apps on NBAS",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an NBAS Hub",
      "› See More",
    ],
  },
  {
    title: "NBAS Payment",
    list: [
      "NBAS Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "NBAS Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    list: [
      "NBAS and COVID-19",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Devices",
      "NBAS Assistant",
    ],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__row">
              <h6>{link.title}</h6>
              <ul>
                {link.list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <img src={NBASLogo} className="footer__logo" />
          <span className="footer__copy">
            &copy; 2022 | Developed by Necati Bugra Akın Seyfullah{" "}
            
          </span>
          
        </div>
      </div>
    </div>
  );
}
export default Footer;
