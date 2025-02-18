"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#home", text: "Home", className: "active" },
  { href: "#about", text: "About" },
  { href: "#faq", text: "FAQ" },
  { href: "#products", text: "Products" },
  { href: "#blog", text: "Blog" },
  { href: "#contact", text: "Contact" },
];

export default function Header2({ links }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo Section */}
      <div className="nav-logo-wrap local-scroll">
        <Link href="/" className="logo font-alt">
          {/* ========== DESKTOP LOGOS ========== */}
          {/* Light Mode Logo (Desktop) */}
          <div className="light-mode-logo">
            {" "}
            {/* Dark Mode Logo (Desktop) */}
            <div
              className="d-none d-md-flex light-mode-logo"
              style={{
                height: "40px",
                display: "flex",
                flexBasis: "0",
                flexDirection: "row",
                flexGrow: 1,
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "flex-start",
                whiteSpace: "nowrap",
                backgroundColor: "transparent",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                textDecorationLine: "none",
                gap: "0",
                maxWidth: "fit-content",
                listStyle: "none",
                color: "inherit",
                border: "0 solid #e5e7eb",
                boxSizing: "border-box",
              }}
            >
              <div style={{ width: "30%" }}>
                <div style={{ maxWidth: "100px" }}>
                  <Image
                    src="/assets/images/wire-logo-dark.svg"
                    alt="Your Company Logo"
                    width={67}
                    height={67}
                    className="light-mode-logo"
                  />
                </div>
              </div>
              <div
                className="light-mode-logo"
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderLeft: "4px solid",
                  paddingLeft: "8px",
                }}
              >
                {" "}
                <div className="light-mode-logo" style={{ width: "100%" }}>
                  <h1
                    style={{
                      fontWeight: 600,
                      fontSize: "32px",
                      margin: 0,
                    }}
                  >
                    WIRE &nbsp;BRIDGER
                  </h1>{" "}
                </div>
                <div className="light-mode-logo" style={{ width: "100%" }}>
                  <p
                    style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}
                  >
                    HVAC WIRING SOLUTION
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="dark-mode-logo">
            {" "}
            {/* Dark Mode Logo (Desktop) */}
            <div
              className="d-none d-md-flex dark-mode-logo"
              style={{
                height: "40px",
                display: "flex",
                flexBasis: "0",
                flexDirection: "row",
                flexGrow: 1,
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "flex-start",
                whiteSpace: "nowrap",
                backgroundColor: "transparent",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                textDecorationLine: "none",
                gap: "0",
                maxWidth: "fit-content",
                listStyle: "none",
                color: "inherit",
                border: "0 solid #e5e7eb",
                boxSizing: "border-box",
              }}
            >
              <div style={{ width: "30%" }}>
                <div style={{ maxWidth: "100px" }}>
                  <Image
                    src="/assets/images/wire-logo.svg"
                    alt="Your Company Logo"
                    width={67}
                    height={67}
                    className="dark-mode-logo"
                  />
                </div>
              </div>
              <div
                className="dark-mode-logo"
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderLeft: "4px solid",
                  paddingLeft: "8px",
                }}
              >
                {" "}
                <div className="dark-mode-logo" style={{ width: "100%" }}>
                  <h1
                    style={{
                      fontWeight: 600,
                      fontSize: "32px",
                      margin: 0,
                    }}
                  >
                    WIRE &nbsp;BRIDGER
                  </h1>{" "}
                </div>
                <div className="dark-mode-logo" style={{ width: "100%" }}>
                  <p
                    style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}
                  >
                    HVAC WIRING SOLUTION
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========== MOBILE LOGO ========== */}
          <div className="light-mode-logo">
            <div
              className="d-flex d-md-none"
              style={{ gap: "0.5rem", alignItems: "center" }}
            >
              {/* Show whichever image you want for mobile (light or dark) */}
              <Image
                src="/assets/images/wire-logo-dark.svg"
                alt="Your Company Logo - Mobile"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className=" dark-mode-logo">
            <div
              className="d-flex d-md-none"
              style={{ gap: "0.5rem", alignItems: "center" }}
            >
              {/* If you only want one logo, remove the extra image below. 
                Otherwise, keep both if you plan to manage light/dark mode. */}
              <Image
                src="/assets/images/wire-logo.svg"
                alt="Your Company Logo - Mobile Dark Mode"
                width={50}
                height={50}
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>

      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={links} />
        </ul>
        <ul className="items-end clearlist local-scroll">
          <li>
            <a
              href="https://www.wirebridger.com/#contact"
              className="opacity-1 no-hover"
            >
              <span
                className="btn btn-mod btn-small btn-border btn-border-white btn-circle ttn"
                data-btn-animate="y"
              >
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">
                    Let's talk{" "}
                    <i
                      className="icon-arrow-right1 size-16"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    Let's talk{" "}
                    <i
                      className="icon-arrow-right1 size-16"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
