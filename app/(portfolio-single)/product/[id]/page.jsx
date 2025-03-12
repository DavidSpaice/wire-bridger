import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import RelatedProject9 from "@/components/portfolio/relatedProjects/RelatedProject9";
import Image from "next/image";
import { boldOnePageProducts } from "@/data/menu";
import dynamic from "next/dynamic";
import React from "react";
import Link from "next/link";
import { allPortfolios } from "@/data/portfolio";
import { portfolios2 } from "@/data/portfolio";

// Parallax container dynamic import
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  { ssr: false }
);

export const metadata = {
  title: "WIRE BRIDGER WB1000 || HVAC Wire Product Details",
  description:
    "Detailed information on the WIRE BRIDGER WB1000 HVAC wire solution.",
};

export default function BoldPortfolioSinglePage({ params }) {
  // Retrieve product item based on ID or default to first if no match
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];

  // De-structure tab content to simplify usage
  const { description, specifications, documents } = portfolioItem?.tabs || {};

  const currentIndex = portfolios2.findIndex(
    (item) => item.id === portfolioItem.id
  );

  if (currentIndex === -1) {
  }

  const isLastItem = currentIndex === portfolios2.length - 1;

  return (
    <div className="theme-bold">
      <div className="page" id="top">
        {/* Main Navigation */}
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <Header2 links={boldOnePageProducts} />
        </nav>

        <main id="main">
          {/* Parallax Header Section */}
          <ParallaxContainer
            className="page-section bg-dark-alpha-30 parallax-5 light-content"
            style={{ backgroundColor: "#111111" }}
            id="home"
          >
            <div className="container position-relative pt-sm-40">
              <div className="text-center">
                <h1 className="hs-title-4 font-alt mb-0">
                  <span
                    className="wow charsAnimInLong-1"
                    data-splitting="chars"
                  >
                    <AnimatedText text={portfolioItem.title} />
                  </span>
                </h1>
              </div>
            </div>
          </ParallaxContainer>
          {/* Product Details Section with Tabs */}
          <section className="page-section pt-50 pb-50">
            <div className="container position-relative">
              <div className="row">
                {/* LEFT COLUMN: Tabs */}
                <div className="custom-tab-style col-md-5 mb-sm-40">
                  <ul
                    className="nav nav-tabs mb-20"
                    id="wb1000Tabs"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        type="button"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="specs-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#specs"
                        type="button"
                        role="tab"
                        aria-controls="specs"
                        aria-selected="false"
                      >
                        Specifications
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="documents-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#documents"
                        type="button"
                        role="tab"
                        aria-controls="documents"
                        aria-selected="false"
                      >
                        Documents
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="wb1000TabContent">
                    {/* Description Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      {/* If your data is nested, check for existence before mapping */}
                      {description && (
                        <>
                          <h2 className="h4 mb-3">
                            {description.functionsTitle}
                          </h2>
                          <ul>
                            {description.functionsList?.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>

                          <h2 className="h4 mb-3 mt-4">
                            {description.overviewTitle}
                          </h2>
                          <p>{description.overviewText}</p>
                        </>
                      )}
                    </div>

                    {/* Specifications Tab */}
                    <div
                      className="tab-pane fade"
                      id="specs"
                      role="tabpanel"
                      aria-labelledby="specs-tab"
                    >
                      {specifications && (
                        <>
                          <h2 className="h4 mb-3">
                            {specifications.technicalSpecsTitle}
                          </h2>
                          <ul>
                            {specifications.technicalSpecsList?.map(
                              (spec, idx) => (
                                <li key={idx}>{spec}</li>
                              )
                            )}
                          </ul>

                          <h2 className="h4 mb-3 mt-4">
                            {specifications.safetyTitle}
                          </h2>
                          <ul>
                            {specifications.safetyList?.map((safety, idx) => (
                              <li key={idx}>{safety}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>

                    {/* Documents Tab */}
                    <div
                      className="tab-pane fade"
                      id="documents"
                      role="tabpanel"
                      aria-labelledby="documents-tab"
                    >
                      {documents && (
                        <>
                          <h2 className="h4 mb-3">
                            {documents.installationTitle}
                          </h2>
                          <p>{documents.installationIntro}</p>
                          <ul>
                            {documents.installationSteps?.map((step, idx) => (
                              <li key={idx}>
                                <strong>{step.label}</strong>:{" "}
                                {step.description}
                              </li>
                            ))}
                          </ul>
                          {/* PDF Manual Link */}
                          {documents.manualLink && (
                            <div className="mt-4">
                              <Link href={documents.manualLink} passHref target="_blank">
                                Download Brochure (PDF)
                              </Link>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Product Images */}
                {/* RIGHT COLUMN: Product Images */}
                <div className="col-md-7">
                  <div className="mb-n30">
                    {portfolioItem?.images?.map((img, idx) => (
                      <div
                        className="mb-30 wow fadeInUp"
                        data-wow-offset={0}
                        key={idx}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={1200}
                          height={819}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Divider */}
          <hr className="black mt-0 mb-0" />
          {/* Related Products (Optional) */}
          {/*
          <section className="page-section">
            <RelatedProject9 />
          </section>
          */}
          <section className="page-section">
            {portfolios2.length > 1 ? (
              // If we have more than one item in portfolios2
              !isLastItem ? (
                // If it's not the last item, show a "Next Product" button
                <Link
                  href={`https://www.wirebridger.com/product/${
                    portfolios2[currentIndex + 1].id
                  }`}
                >
                  <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                    <span className="text-outline">Next Product</span>
                  </h2>
                </Link>
              ) : (
                // If it is the last item, show "Back to Home"
                <Link href={"/"}>
                  <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                    <span className="text-outline">Back to Home</span>
                  </h2>
                </Link>
              )
            ) : (
              // If portfolios2.length is 1 or 0, show "Back to Home" button
              <Link href={"/"}>
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline">Back to Home</span>
                </h2>
              </Link>
            )}
          </section>
        </main>

        <footer className="footer-1 bg-dark-1 light-content">
          <Footer2 />
        </footer>
      </div>
    </div>
  );
}
