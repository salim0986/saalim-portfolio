import React from "react";

const Experience = () => {
  return (
    <section id="experience">
      <section>
        <div
          className="oddDiv"
          style={{ "::after": { animationDelay: "300ms" } }}
        >
          <h2>TOOTLE</h2>
          <p>20/04/2022</p>
        </div>
        <div
          className="evenDiv"
          style={{ "::after": { animationDelay: "100ms" } }}
        >
          <h2>Video Hub</h2>
          <p>12/09/2023</p>
        </div>
        <div
          className="oddDiv"
          style={{ "::after": { animationDelay: "300ms" } }}
        >
          <h2>XCrypto</h2>
          <p>15/09/2023</p>
        </div>
        <div
          className="evenDiv"
          style={{ "::after": { animationDelay: "500ms" } }}
        >
          <h2>React Cart</h2>
          <p>22/09/2023</p>
        </div>
        <div
          className="oddDiv"
          style={{ "::after": { animationDelay: "700ms" } }}
        >
          <h2>PORTFOLIO</h2>
          <p>28/09/2023</p>
        </div>
        <div
          className="evenDiv"
          style={{ "::after": { animationDelay: "100ms" } }}
        >
          <h2>Vocab Boost</h2>
          <p>20/02/2024</p>
        </div>
      </section>
    </section>
  );
};

export default Experience;
