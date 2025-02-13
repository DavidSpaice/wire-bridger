"use client";

import { useState } from "react";

export default function Contact({ heading }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("https://www.wirebridger.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      // If success:
      setStatus("success");
      setFeedback("Thank you! Your message has been sent.");
      // Optionally clear the form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-70">
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">
              {heading ? heading : "Contact Us"}
            </span>
            <span className="text-outline-1">
              {heading ? heading : "Contact Us"}
            </span>
            <span className="text-outline">
              {heading ? heading : "Contact Us"}
            </span>
          </h2>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            <span className="section-title-inline">How?</span> Have a question
            about our HVAC wire solutions? Drop us a line or give us a call.
            We're always ready to discuss new projects and ideas.
          </p>
          <div>
            <a
              href="mailto:info@wirebridger.com"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              info@wirebridger.com
            </a>
          </div>
          <div>
            <a
              href="tel:+18338899473"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              +1 (833) 889-9473
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-xl-6 offset-xl-1 pt-30 pt-md-0">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="form contact-form wow fadeInUp"
            id="contact_form"
          >
            {/* Name */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="name" className="mb-0 mb-sm-10 me-3">
                Your Name
              </label>
              <div className="flex-grow-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Enter your name here"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="email" className="mb-0 mb-sm-10 me-3">
                Email Address
              </label>
              <div className="flex-grow-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Enter your email here"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="mb-sm-10">
                What's your question?
              </label>
              <textarea
                name="message"
                id="message"
                className="input-sm form-control underline"
                style={{ height: 120 }}
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                {/* Button */}
                <button
                  className="submit_btn btn btn-mod btn-circle btn-white btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                  disabled={status === "submitting"}
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* Inform Tip */}
                <div className="form-tip pt-30 pt-sm-20">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the{" "}
                  <a
                    href="/2025_Wire_Bridger_Terms_and_Conditions_and_Privacy_Policy.pdf"
                    target="_blank"
                  >
                    Terms &amp; Conditions and Privacy Policy
                  </a>
                  .
                </div>
              </div>
            </div>

            {/* Status/Result message */}
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
              style={{ marginTop: "1rem" }}
            >
              {feedback && (
                <p
                  style={{
                    color: status === "error" ? "red" : "green",
                  }}
                >
                  {feedback}
                </p>
              )}
            </div>
          </form>
          {/* End Contact Form */}
        </div>
      </div>
    </div>
  );
}
