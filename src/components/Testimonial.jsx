import React, { useState } from "react";
import { GiCharacter } from "react-icons/gi";
import profile from "../assets/abex_founder.png";

const testimonials = [
  {
    id: 1,
    icon: <GiCharacter />,
    name: "Aditya Singh(Founder: AnalysticX)",
    text: "Throughout the four-month hybrid/remote apprenticeship, Mohd Saalim consistently demonstrated excellent technical skills, creativity, and professionalism while contributing to the development of our healthcare AI platform.",
    hasImage: false
  },
  {
    id: 2,
    image: profile,
    name: "Karthick Raj N, Director at ABEX",
    text: "We sincerely appreciate your hard work, dedication, and the enthusiasm you brought to our organization. Your contributions to various projects have been valuable, and we hope this experience has been enriching for your professional development.",
    hasImage: true
  }
];

const Testimonial = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="testimonial">
      <div>
        <h2>Testimonial</h2>
      </div>
      <section>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={expandedCards[testimonial.id] ? 'expanded' : ''}>
            {testimonial.hasImage ? (
              <span className="testimonialImg">
                <img src={testimonial.image} alt="Testimonial" />
              </span>
            ) : (
              <span>
                {testimonial.icon}
              </span>
            )}
            <h4>{testimonial.name}</h4>
            <p>{testimonial.text}</p>
            <button 
              className="read-more-btn"
              onClick={() => toggleExpand(testimonial.id)}
            >
              {expandedCards[testimonial.id] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Testimonial;
