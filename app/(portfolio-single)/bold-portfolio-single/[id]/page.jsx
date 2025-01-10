import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import RelatedProject9 from "@/components/portfolio/relatedProjects/RelatedProject9";
import Image from "next/image";
import { boldOnePageProducts } from "@/data/menu";
import dynamic from "next/dynamic";
import React from "react";
import { allPortfolios } from "@/data/portfolio";

// Parallax container dynamic import
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false,
  }
);

// Update metadata to reflect your product
export const metadata = {
  title: "WIREBRIDGER WB1000 || HVAC Product Details",
  description: "Detailed information on the WIREBRIDGER WB1000 HVAC solution.",
};

export default function BoldPortfolioSinglePage({ params }) {
  // Retrieve product item based on ID or default to first if no match
  const portfolioItem =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];

  return (
    <div className="theme-bold">
      <div className="page" id="top">
        {/* Main Navigation */}
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <Header2 links={boldOnePageProducts} />
        </nav>

        {/* Main Content */}
        <main id="main">
          {/* Parallax Header Section */}
          <ParallaxContainer
            className="page-section bg-dark-alpha-30 parallax-5 light-content"
            style={{
              backgroundColor: "#111111",
            }}
            id="home"
          >
            <div className="container position-relative pt-sm-40">
              <div className="text-center">
                <h1 className="hs-title-4 font-alt mb-0">
                  <span
                    className="wow charsAnimInLong-1"
                    data-splitting="chars"
                  >
                    <AnimatedText text="WIREBRIDGER WB1000" />
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
                      <h2 className="h4 mb-3">Functions</h2>
                      <ul>
                        <li>
                          WB1000 adds two additional control wires between a
                          thermostat and indoor or outdoor unit.
                        </li>
                        <li>
                          Works with all 24V AC heating and cooling systems.
                        </li>
                        <li>
                          Can be used to provide a common connection (<b>C</b>
                          ).
                        </li>
                      </ul>
                      <h2 className="h4 mb-3 mt-4">Overview</h2>
                      <p>
                        The WIREBRIDGER WB1000 is an all-in-one HVAC wiring
                        solution designed to reduce installation time and
                        simplify system upgrades. It offers versatile
                        configuration options for seamless retrofits, ensuring
                        optimal performance in new or existing HVAC setups.
                      </p>
                    </div>

                    {/* Specifications Tab */}
                    <div
                      className="tab-pane fade"
                      id="specs"
                      role="tabpanel"
                      aria-labelledby="specs-tab"
                    >
                      <h2 className="h4 mb-3">Technical Specifications</h2>
                      <ul>
                        <li>Transformer Voltage: 22-28V</li>
                        <li>Switch Current: 2A</li>
                        <li>Max Distance: 30m / 1181.1in</li>
                        <li>
                          Transmitter Size: 30 x 21 x 12mm (1.2 x 0.8 x 0.5in)
                        </li>
                        <li>Collector Size: Ø90 x 29mm (Ø3.5 x 1.1in)</li>
                      </ul>

                      <h2 className="h4 mb-3 mt-4">Electrical Safety</h2>
                      <ul>
                        <li>
                          Installation must be performed by a qualified
                          technician.
                        </li>
                        <li>Connected load must not exceed 30VAC or 2 amps.</li>
                        <li>
                          Disconnect power before installation to avoid electric
                          shock.
                        </li>
                        <li>
                          Separate low-voltage field wiring from high-voltage
                          wiring.
                        </li>
                      </ul>
                    </div>

                    {/* Documents Tab */}
                    <div
                      className="tab-pane fade"
                      id="documents"
                      role="tabpanel"
                      aria-labelledby="documents-tab"
                    >
                      <h2 className="h4 mb-3">Installation &amp; Manuals</h2>
                      <p>
                        Below are resources to help you install and configure
                        the WB1000:
                      </p>
                      <ul>
                        <li>
                          <strong>Transmitter Installation</strong>: Place
                          inside thermostat wall or cabinet. Connect to wires
                          accordingly.
                        </li>
                        <li>
                          <strong>Collector Installation</strong>: Install
                          inside a suitable electrical cabinet or protected
                          location. Connect wires according to wiring diagram.
                        </li>
                        <li>
                          <strong>Testing</strong>: Check each thermostat
                          control (G, Y, W, etc.) to verify proper operation.
                        </li>
                        <li>
                          <strong>Contact &amp; Support</strong>: For any
                          assistance, call <b>(833)889-9473 (WIRE)</b> or email{" "}
                          <b>Info@wirebridger.com</b>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Product Images */}
                <div className="col-md-7">
                  <div className="mb-n30">
                    {/* Example images — replace with actual product images */}
                    <div className="mb-30 wow fadeInUp" data-wow-offset={0}>
                      <Image
                        src="/assets/images/demo-bold/portfolio/wb1000.png"
                        alt="WIREBRIDGER WB1000 - Diagram"
                        width={1200}
                        height={819}
                      />
                    </div>
                    <div className="mb-30 wow fadeInUp">
                      <Image
                        src="/assets/images/demo-bold/portfolio/1.png"
                        alt="WIREBRIDGER WB1000 - Image 2"
                        width={1200}
                        height={819}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <hr className="black mt-0 mb-0" />

          {/* Related Products (Optional) */}
          <section className="page-section">
            <RelatedProject9 />
          </section>
        </main>

        {/* Footer */}
        <footer className="footer-1 bg-dark-1 light-content">
          <Footer2 />
        </footer>
      </div>
    </div>
  );
}
