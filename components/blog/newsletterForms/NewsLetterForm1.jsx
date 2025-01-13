"use client";

import { useState } from "react";

export default function NewsLetterForm1() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  // status can be "idle" | "submitting" | "success" | "error"
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      // Send POST request to /api/subscribe with the email
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      // If successful
      setStatus("success");
      setFeedback("Thank you for subscribing!");
      // Optionally clear the email field
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
      setFeedback("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="mailchimp"
      className="form newsletter-modern"
    >
      <div className="d-md-flex justify-content-between mb-40">
        <label htmlFor="newsletter-email" className="visually-hidden">
          Your email
        </label>
        <input
          placeholder="Enter your email"
          className="underline newsletter-field mb-sm-20 me-md-4"
          id="newsletter-email"
          name="newsletter-email"
          type="email"
          pattern=".{5,100}"
          required
          aria-required="true"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="d-md-flex align-items-end">
          <button
            type="submit"
            aria-controls="subscribe-result"
            className="btn btn-mod btn-medium btn-circle text-nowrap"
            data-btn-animate="y"
            disabled={status === "submitting"}
          >
            <span className="btn-animate-y">
              {status === "submitting" ? (
                <div>
                  <span className="btn-animate-y-1">Subscribing...</span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    Subscribing...
                  </span>
                </div>
              ) : (
                <div>
                  <span className="btn-animate-y-1">Subscribe now</span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    Subscribe now
                  </span>
                </div>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="form-tip">
        <i className="icon-info size-16" />
        By sending the form you agree to the
        <a href="#">Terms &amp; Conditions</a> and
        <a href="#">Privacy Policy</a>.
      </div>
      <div
        id="subscribe-result"
        role="region"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Show success or error feedback */}
        {feedback && (
          <p
            style={{
              color: status === "error" ? "red" : "green",
              marginTop: "1rem",
            }}
          >
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}
