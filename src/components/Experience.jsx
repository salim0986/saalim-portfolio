import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <section>
        <div
          className="oddDiv"
          style={{ "::after": { animationDelay: "100ms" } }}
        >
          <h2>AI Software Engineer</h2>
          <p>Jan 2026 - Present</p>
          <small>DaysAI - MarketDay</small>
        </div>
        <div
          className="evenDiv"
          style={{ "::after": { animationDelay: "200ms" } }}
        >
          <h2>Generative AI Engineer</h2>
          <p>Nov 2025 - Jan 2026</p>
          <small>ABEX</small>
        </div>
        <div
          className="oddDiv"
          style={{ "::after": { animationDelay: "300ms" } }}
        >
          <h2>Full Stack Engineer</h2>
          <p>Aug 2025 - Oct 2025</p>
          <small>ABEX - Internship</small>
        </div>
        <div
          className="evenDiv"
          style={{ "::after": { animationDelay: "400ms" } }}
        >
          <h2>Teaching Assistant</h2>
          <p>Jan 2025 - Present</p>
          <small>IIT Madras</small>
        </div>
      </section>
    </section>
  );
};

export default Experience;
