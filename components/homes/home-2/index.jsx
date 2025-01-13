import React from "react";
import Experience from "./Experience";
// import Awards from "./Awards";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";
import Faq from "./Faq";
import Link from "next/link";
import Image from "next/image";
export default function Home2({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection  pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-last order-md-first">
              <div>
                <Image
                  width={800}
                  height={1095}
                  src="/assets/images/demo-bold/logo-about-us.png"
                  className="w-100 wow scaleOutIn"
                  alt="Image Description"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1 d-flex align-items-center mb-sm-80">
              <div className="wow fadeInUp">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline">About</span>
                </h2>
                <p className="section-text mb-60 mb-md-40 mb-sm-30">
                  <span className="section-title-inline">Who?</span> At
                  WIRE BRIDGER, we specialize in providing innovative solutions
                  to enhance and simplify HVAC wire system upgrades and retrofits.
                  Our products are designed to improve the efficiency and
                  functionality of existing systems, making us a key player in
                  the HVAC industry. We focus on delivering high-quality
                  solutions that meet the diverse needs of our customers.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#faq"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={`/bold-about${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        <Experience />
      </div>
      <section
        className={`page-section scrollSpysection  pt-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="awards"
      ></section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="faq"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-80">
              <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                <span className="text-outline-2">FAQs</span>
                <span className="text-outline-1">FAQs</span>
                <span className="text-outline">FAQs</span>
              </h2>
              <p className="section-text mb-60 mb-md-40 mb-sm-30">
                <span className="section-title-inline">FAQs</span> Here are some
                frequently asked questions to help you understand our innovative
                HVAC wire solutions better.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <div>
                    {" "}
                    <a
                      href="#contact"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a quote
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Request a quote
                      </span>
                    </a>
                  </div>
                ) : (
                  <div>
                    <Link
                      href={`/bold-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a quote
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Request a quote
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              {/* Accordion */}
              <Faq />
              {/* End Accordion */}
            </div>
          </div>
          {/* Divider */}
          <div className="page-section">
            <hr
              className={`${
                dark ? "white opacity-015" : "black"
              } black mt-0 mb-0"`}
            />
          </div>
          {/* End Divider */}
          {/* Steps */}

          <Services />
          {/* End Steps */}
        </div>
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="products"
      >
        <Portfolio />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Testimonials />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
