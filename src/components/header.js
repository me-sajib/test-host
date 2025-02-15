import { Link } from "gatsby";
import React, { useState } from "react";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import Logo from "../images/EmpressiveTiaraLogo.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="header shadow relative">
      <div className="absolute h-full w-full header__overlay" />
      <div className="flex flex-wrap items-center mx-auto p-4 md:p-8 relative">
        <Link
          className="flex no-underline text-white w-full md:w-1/4 logo"
          to="/"
        >
          <img alt="Empressive Tiara Logo" src={Logo} />
        </Link>
        <div className="flex flex-wrap w-full md:w-2/3 justify-center">
          <section className="flex w-full items-center justify-center md:flex-1 md:mb-8 nav-icons-container">
            <div className="nav-icon-div">
              <a
                href="https://www.youtube.com/empressive"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaYoutube className="nav-icons" />
              </a>
            </div>
            <div className="nav-icon-div">
              <a
                href="https://www.instagram.com/empressivetv/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram className="nav-icons" />
              </a>
            </div>
            <div className="nav-icon-div">
              <a
                href="https://www.facebook.com/empressivetv"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebook className="nav-icons" />
              </a>
            </div>
            <div className="nav-icon-div">
              <a
                href="https://twitter.com/empressivetv"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter className="nav-icons" />
              </a>
            </div>
            <div className="nav-icon-div">
              <a
                href="https://www.linkedin.com/company/empressivetv/about/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin className="nav-icons" />
              </a>
            </div>
          </section>

          <button
            className="block lg:hidden mb-2 border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <nav
            className={`${
              isExpanded ? `block` : `hidden`
            } lg:block flex flex-column flex-wrap lg:flex-row lg:items-center text-center justify-center w-full  px-4 nav lg:h-12 shadow`}
          >
            {[
              {
                route: `/`,
                title: `Hot Topics`
              },
              {
                route: `/music-documentaries`,
                title: `Music Documentaries`
              },
              {
                route: `/artist-spotlight`,
                title: `Artist Spotlight`
              },
              {
                route: `/contact`,
                title: `Contact`
              }
            ].map(link => (
              <Link
                className="block w-full md:w-auto md:inline-block mt-4 md:mt-2 md:ml-6 no-underline text-white nav-text"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
