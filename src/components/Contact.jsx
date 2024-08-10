import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONNECT WITH ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
            <a
            href="mailto:mohitgk7185@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/mohit-kumar-256a8822a/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/MohitNSUT?tab=repositories" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="https://www.instagram.com/mohit.chaudharii/?next=%2F" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://codeforces.com/profile/mohitgk7185" target="_blank" className="items">
            <SiCodeforces className="icons" />
          </a>
          <a href="https://www.codechef.com/users/mohitgk7185" target="_blank" className="items">
            <SiCodechef  className="icons" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/mohitcoder/" target="_blank" className="items">
            <SiGeeksforgeeks className="icons" />
          </a>
          <a href="https://leetcode.com/u/Mohit__Coder/" target="_blank" className="items">
            <SiLeetcode className="icons" />
          </a>

        </div>
      </div>
    </>
  );
};

export default Contact;
