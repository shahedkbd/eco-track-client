import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4 poppins">
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <TiSocialFacebook className="size-8" />
          </a>
          <a>
            <FaXTwitter className="size-8" />
          </a>
          <a>
            <TiSocialLinkedin className="size-8" />
          </a>
        </div>
      </nav>
      <aside>
        <p className="poppins">
            © {new Date().getFullYear()} - All right reserved by EcoTrack
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
