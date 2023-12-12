import React from "react";
import { footerMarquee } from "../data/footerMarquee";

const Footer = () => {
  return (
    <div className="d-flex flex-column  align-items-center footer">
      <marquee
        className="p-2"
        direction="left"
        loop="-1"
        scrollamount="8"
        style={{}}
      >
        {footerMarquee.map((footer, index) => (
          <span
            key={index}
            className={`marquee-text ${index % 2 === 1 ? "bold-text" : ""}`}
          >
            {footer}
          </span>
        ))}
      </marquee>
      <p className="text-center mt-4 pt-3 display-6">NORDIC ROSE</p>
      <p className="text-center footer-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        obcaecati minus fugiat optio sapiente labore deleniti esse, voluptatem
        amet officia doloribus culpa dolor eos voluptatibus animi ipsam quaerat
        quis aliquid.
      </p>
      <p className="d-flex gap-5 ">
        <a className="text-white" href="#">
          Twitter
        </a>
        <a className="text-white" href="#">
          LinkedIn
        </a>
        <a className="text-white" href="#">
          RSS
        </a>
      </p>

      <p className="h6 mt-4">© 2012–2020 Nordic Rose Co.</p>
      <p className="h6 ">All rights reserved.</p>
    </div>
  );
};

export default Footer;
