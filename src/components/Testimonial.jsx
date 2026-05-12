import React from "react";
import { GiCharacter } from "react-icons/gi";
import profile from "../assets/abex_founder.png";


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
          <h4>Aditya Singh(Founder: AnalysticX)</h4>
          <p>
            Throughout the four-month hybrid/remote apprenticeship, Mohd Saalim
            consistently demonstrated excellent technical skills, creativity,
            and professionalism while contributing to the development of our
            healthcare AI platform.
          </p>
        </div>
        <div>
          <span className="testimonialImg">
            <img src={profile} alt="Testimonial" />
          </span>
          <h4>Karthick Raj N, Director at ABEX</h4>
          <p>
            We sincerely appreciate your hard work, dedication, and the enthusiasm you brought
            to our organization. Your contributions to various projects have been valuable, and
            we hope this experience has been enriching for your professional development.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Testimonial;
