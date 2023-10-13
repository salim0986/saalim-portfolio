import React, { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const smallNav = useRef(null);
  const handleClick = (e) => {
    if (smallNav.current.classList.contains("active")) {
      smallNav.current.classList.remove("active");
    } else {
      smallNav.current.classList.add("active");
    }
  };
  return (
    <>
      <nav>
        <h3>Saalim.</h3>
        <div className="navLinkLeft bigHeader">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#testimonial">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <span onClick={(e) => handleClick(e)} className="menuBtn smallHeader">
          <RxHamburgerMenu size={"2rem"} />
        </span>
        <a className="bigHeader" href="mailto:salimansari0986@gmail.com">
          <button>Email</button>
        </a>
        <div className="smallNav" ref={smallNav}>
          <h3>Saalim.</h3>
          <div className="navLinkLeft ">
            <a onClick={handleClick} href="#home">
              Home
            </a>
            <a onClick={handleClick} href="#work">
              Work
            </a>
            <a onClick={handleClick} href="#experience">
              Experience
            </a>
            <a onClick={handleClick} href="#services">
              Services
            </a>
            <a onClick={handleClick} href="#testimonial">
              Testimonials
            </a>
            <a onClick={handleClick} href="#contact">
              Contact
            </a>
          </div>
          <a href="mailto:salimansari0986@gmail.com">
            <button onClick={handleClick}>Email</button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
