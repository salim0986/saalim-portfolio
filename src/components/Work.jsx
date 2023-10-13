import React from "react";
import { Carousel } from "react-responsive-carousel";
import { projects } from "../assets/data.json";
const Work = () => {
  return (
    <section id="work">
      <div>
        <h2>Work</h2>
      </div>
      <section>
        <CarouselComponent />
      </section>
    </section>
  );
};
const CarouselComponent = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={2000}
        className="carousel"
      >
        {projects.map(({ title, description, url, imgSrc }, i) => (
          <div key={i} className="carousel-item">
            <img src={imgSrc} alt={title} />
            <aside>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={url}>Demo</a>
            </aside>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Work;
