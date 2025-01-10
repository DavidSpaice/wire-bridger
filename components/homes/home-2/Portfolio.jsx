"use client";
import React, { useEffect, useState } from "react";
import { portfolios2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

const filters = [
  { name: "All Products", category: "all" },
  { name: "Coming Soon", category: "comingsoon" },
];

export default function Portfolio({ desc }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolios2);

  useEffect(() => {
    if (currentCategory === "all") {
      setFiltered(portfolios2);
    } else {
      setFiltered(
        portfolios2.filter((item) => item.categories.includes(currentCategory))
      );
    }
  }, [currentCategory]);

  return (
    <div className="container">
      <div className="row mb-90 mb-md-40">
        <div className="col-lg-5 mb-md-30">
          {desc ? (
            <p className="section-text mb-0">
              <span className="section-title-inline">Hey!</span> Explore our
              HVAC products that deliver top-tier comfort and efficiency.
            </p>
          ) : (
            <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-0">
              <span className="text-outline">Products</span>
            </h2>
          )}
        </div>
        <div className="col-lg-7 pb-20 pb-md-0 d-flex align-items-end">
          {/* Works Filter */}
          <div className="works-filter works-filter-bold text-start text-lg-end w-100">
            {filters.map((elm, i) => (
              <a
                onClick={() => setCurrentCategory(elm.category)}
                key={i}
                className={`filter ${
                  currentCategory === elm.category ? "active" : ""
                }`}
              >
                {elm.name}
              </a>
            ))}
          </div>
          {/* End Works Filter */}
        </div>
      </div>
      {/* Portfolio Grid */}
      <div id="isotope" className="mb-n100 mb-sm-n50">
        {filtered.map((item, index) => (
          <div
            key={item.id}
            className={`portfolio-2-item mb-100 mb-sm-50 mix ${item.categories.join(
              " "
            )}`}
          >
            <div className="row">
              {!(index % 2) ? (
                <>
                  {/* Image Column */}
                  <div className="col-md-8 mb-sm-30 order-md-first">
                    <div className="portfolio-2-image">
                      {/* Keep image link for all products (optional).
                          If you don't want Coming Soon to be clickable at all, conditionally remove <Link> similarly. */}
                      <Link
                        href={
                          item.categories.includes("comingsoon")
                            ? "#"
                            : `/bold-portfolio-single/${item.id}`
                        }
                      >
                        <Image
                          width={1200}
                          height={819}
                          src={item.imageUrl}
                          alt="Product Image"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* Text Column */}
                  <div className="col-md-4">
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      {item.categories.includes("comingsoon") ? (
                        <span>{item.title}</span>
                      ) : (
                        <Link href={`/bold-portfolio-single/${item.id}`}>
                          {item.title}
                        </Link>
                      )}
                    </h3>
                    <p className="portfolio-2-descr">{item.description}</p>
                    {/* Conditional View Details or Coming Soon */}
                    <div>
                      {item.categories.includes("comingsoon") ? (
                        <span>Coming Soon</span>
                      ) : (
                        <Link
                          href={`/bold-portfolio-single/${item.id}`}
                          className="link-hover-anim underline align-middle"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            View Details
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            View Details
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Column */}
                  <div className="col-md-4">
                    <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                    <h3 className="portfolio-2-title font-alt mb-20">
                      {item.categories.includes("comingsoon") ? (
                        <span>{item.title}</span>
                      ) : (
                        <Link href={`/bold-portfolio-single/${item.id}`}>
                          {item.title}
                        </Link>
                      )}
                    </h3>
                    <p className="portfolio-2-descr">{item.description}</p>
                    {/* Conditional View Details or Coming Soon */}
                    <div>
                      {item.categories.includes("comingsoon") ? (
                        <span>Coming Soon</span>
                      ) : (
                        <Link
                          href={`/bold-portfolio-single/${item.id}`}
                          className="link-hover-anim underline align-middle"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            View Details
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            View Details
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                  {/* Image Column */}
                  <div
                    className={`col-md-8 mb-sm-30 ${
                      index % 2 ? "order-first order-md-last" : ""
                    } `}
                  >
                    <div className="portfolio-2-image">
                      <Link
                        href={
                          item.categories.includes("comingsoon")
                            ? "#"
                            : `/bold-portfolio-single/${item.id}`
                        }
                      >
                        <Image
                          width={1200}
                          height={819}
                          src={item.imageUrl}
                          alt="Product Image"
                        />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* End Portfolio Grid */}
    </div>
  );
}
