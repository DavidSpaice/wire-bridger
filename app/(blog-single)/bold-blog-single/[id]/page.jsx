import Form1 from "@/components/blog/commentForm/Form1";
import Comments from "@/components/blog/Comments";
import NewsLetterForm1 from "@/components/blog/newsletterForms/NewsLetterForm1";
import Slider1 from "@/components/blog/sliders/Slider1";
import Widget1 from "@/components/blog/widgets/Widget1";
import AnimatedText from "@/components/common/AnimatedText";
import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";

import { blogs2 } from "@/data/blogs";
import { boldOnePageProducts } from "@/data/menu";

import dynamic from "next/dynamic";
import React from "react";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false,
  }
);

export const metadata = {
  title:
    "Bold Blog Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

export default function BoldBlogSinglePage({ params }) {
  // 1) Grab the matching blog by the ID
  const blog = blogs2.find((item) => item.id == params.id);

  // Fallback if not found
  if (!blog) {
    return (
      <div>
        <h1>404 - Blog Not Found</h1>
      </div>
    );
  }

  // 2) De-structure relevant fields from the object
  const { title, postTitle, authorName, author, date, postDate, content } =
    blog;

  // Some blogs use `title` or `postTitle`, some `authorName` or `author`, etc.
  const displayTitle = title || postTitle || "Untitled Post";
  const displayAuthor = authorName || author || "Unknown Author";
  const displayDate = date || postDate || "Unknown Date";

  return (
    <div>
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header2 links={boldOnePageProducts} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-light-alpha-70 parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-bold/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-40">
                <div className="text-center">
                  <h1 className="section-title-medium font-alt mb-0">
                    <span
                      className="wow charsAnimInLong-1"
                      data-splitting="chars"
                    >
                      <AnimatedText text={displayTitle} />
                    </span>
                  </h1>
                  {/* Author, Categories, Comments */}
                  <div
                    className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="d-inline-block me-3">
                      <i className="mi-clock size-16" />
                      <span className="visually-hidden">Date:</span>{" "}
                      {displayDate}
                    </div>
                    <div className="d-inline-block me-3">
                      <i className="mi-user size-16" />
                      <span className="visually-hidden">Author:</span>{" "}
                      {displayAuthor}
                    </div>
                    {/* 
                    <div className="d-inline-block me-3">
                      <i className="mi-folder size-16" />
                      <span className="visually-hidden">Categories:</span>
                      <a href="#">Design</a>, <a href="#">wirebridger</a>
                    </div>
                    <div className="d-inline-block me-3">
                      <i className="mi-message size-16" /> 5 Comments
                    </div>
                    */}
                  </div>
                  {/* End Author, Categories, Comments */}
                </div>
              </div>
            </ParallaxContainer>
            <div>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-lg-12 mb-md-80">
                      <div className="blog-item mb-80 mb-xs-40">
                        <div className="blog-item-body">
                          {/* Example slider */}
                          {/* 
                          <div className="blog-media mb-40 mb-xs-30">
                            <Slider1 />
                          </div>
                          */}
                          {/* Dynamically render each paragraph in blog.content */}
                          {content && content.length > 0 ? (
                            content.map((paragraph, idx) => {
                              // Simple approach:
                              // If you want to detect headings, bullet points, etc.
                              // you can do so here or store them differently in the object.
                              return (
                                <p key={idx} style={{ marginBottom: "1rem" }}>
                                  {paragraph}
                                </p>
                              );
                            })
                          ) : (
                            <div>
                              {/* Default fallback if no content array */}
                              <p>No content available for this blog.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Comments */}

                      {/* Comments
                      <div className="mb-80 mb-xs-40">
                        <h4 className="blog-page-title">
                          Comments <small className="number">(3)</small>
                        </h4>
                        <ul className="media-list comment-list clearlist">
                          <Comments />
                        </ul>
                      </div> */}

                      {/* Add Comment 
                      <div className="mb-80 mb-xs-40">
                        <h4 className="blog-page-title">Leave a comment</h4>
                        <Form1 />
                      </div>*/}

                      {/* Prev/Next Post */}
                      {/*
                      <div className="clearfix mt-40">
                        <a href="#" className="blog-item-more circle left">
                          <i className="mi-chevron-left" />
                          &nbsp;Prev post
                        </a>
                        <a href="#" className="blog-item-more circle right">
                          Next post&nbsp;
                          <i className="mi-chevron-right" />
                        </a>
                      </div>
                      */}
                    </div>
                    {/* End Content */}

                    {/* Sidebar */}
                    {/* 
                    <div className="col-lg-4 col-xl-3 offset-xl-1">
                      <Widget1 />
                    </div>
                    */}
                    {/* End Sidebar */}
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0 black" />
              {/* Newsletter Section */}
              <section className="small-section">
                <div className="container">
                  <div className="row wow fadeInUp">
                    <div className="col-lg-8 offset-lg-2">
                      <h2 className="section-title-tiny font-alt mb-30">
                        <span className="icon-ellipse" /> Subscribe our
                        newsletter
                      </h2>
                      <NewsLetterForm1 />
                    </div>
                  </div>
                </div>
              </section>
              {/* End Newsletter Section */}
            </div>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>
      </div>
    </div>
  );
}
