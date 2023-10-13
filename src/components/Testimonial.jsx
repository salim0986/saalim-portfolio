import React from "react";
import { GiCharacter } from "react-icons/gi";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div>
        <h2>Testimonial</h2>
      </div>
      <section>
        <div>
          <span>
            <GiCharacter />
          </span>
          <h4>Sundar Pichai</h4>
          <p>
            I really liked this portfolio, I'm thinking about hiring you but I
            will mail you my final decision.
          </p>
        </div>
        <div>
          <span>
            <GiCharacter />
          </span>
          <h4>Saalim</h4>
          <p>
            Portfolio is awesome but I will update it after learning more tech
            stacks.
          </p>
        </div>
        <div>
          <span>
            <GiCharacter />
          </span>
          <h4>Henna</h4>
          <p>
            {" "}
            The portfolio is good but I liked your mentioned projects a lot.{" "}
          </p>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
