import PropTypes from "prop-types";
import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

import Header from "./header";
//import InstaFeed from "./InstaFeed";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center mx-auto w-full">
        {children}
      </main>
      {/* <section className="insta-container flex flex-wrap justify-center items-center p-4 relative shadow-lg">
        <div className="absolute h-full w-full bg-black opacity-50"></div>
        <div className="z-10 md:pb-8">
          <h2 className="insta-title text-center">Empressive on the 'Gram</h2>
          <InstaFeed />
        </div>
      </section> */} 
      <footer className="footer flex items-center">
        <section className="footer-container items-center lg:justify-between flex flex-wrap">
          <nav className="footer-text w-full lg:flex-1 flex py-4 md:p-8 text-sm">
            <div className="text-center flex-1 flex justify-center items-center">
              Copyright © {new Date().getFullYear()} Empressive TV, Inc. All
              Rights Reserved.
            </div>
          </nav>
          <div className="w-full lg:flex-1 items-center justify-center mb-2">
            <section className="flex flex-wrap items-center justify-center footer-icons-container">
              <div className="footer-icon-div">
                <a
                  href="https://www.youtube.com/empressive"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaYoutube className="footer-icons" />
                </a>
              </div>
              <div className="footer-icon-div">
                <a
                  href="https://www.instagram.com/empressivetv/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram className="footer-icons" />
                </a>
              </div>
              <div className="footer-icon-div">
                <a
                  href="https://www.facebook.com/empressivetv"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebook className="footer-icons" />
                </a>
              </div>
              <div className="footer-icon-div">
                <a
                  href="https://twitter.com/empressivetv"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter className="footer-icons" />
                </a>
              </div>
              <div className="footer-icon-div">
                <a
                  href="https://www.linkedin.com/company/empressivetv/about/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin className="footer-icons" />
                </a>
              </div>
            </section>
          </div>
        </section>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
