import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4 poppins">
        <Link to={"/"}>
          <a className="link link-hover">Home</a>
        </Link>
        <Link to={"/challenges"}>
          <a className="link link-hover">Challenges</a>
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to={"https://www.facebook.com/"}>
            <a>
              <TiSocialFacebook className="size-8" />
            </a>
          </Link>
          <Link to={"https://x.com/"}>
            <a>
              <FaXTwitter className="size-8" />
            </a>
          </Link>
          <Link to={"https://www.linkedin.com/in/shahedkofficial/"}>
            <a>
              <TiSocialLinkedin className="size-8" />
            </a>
          </Link>
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
