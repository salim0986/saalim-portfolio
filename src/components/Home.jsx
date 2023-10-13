import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import me from "../assets/logo.png";

const Home = () => {
  const clientRef = useRef(null);
  const projectRef = useRef(null);
  const frames = {
    h1: {
      initial: {
        opacity: 0,
        x: "-100%",
      },
      whileInView: {
        opacity: 1,
        x: 0,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  const animationCount = (count, ref) => {
    animate(0, count, {
      duration: 1,
      onUpdate: (value) => (ref.current.innerText = value.toFixed()),
    });
  };

  return (
    <section id="home">
      <section>
        <div>
          <motion.h1 {...frames.h1}>
            Hi, I Am <br />
            Mohd Saalim
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Learner"],
              loop: true,
              autoStart: true,
              cursor: "",
              wrapperClassName: "typewriter",
            }}
          />
        </div>
        <div className="homeBtns">
          <a href="mailto:salimansari0986@gmail.com">Hire me</a>
          <a href="#work">
            Projects
            <BsArrowUpRight />
          </a>
        </div>
        <article>
          <p>
            +
            <motion.span
              ref={clientRef}
              whileInView={() => animationCount(100, clientRef)}
            ></motion.span>
          </p>
          <span>Clients Worldwide</span>
        </article>
        <aside>
          <article>
            <p>
              +
              <motion.span
                ref={projectRef}
                whileInView={() => animationCount(50, projectRef)}
              ></motion.span>
            </p>
            <span>Projects Done</span>
          </article>
          <article data-special>
            <p>Contact</p>
            <span>salimansari0986@gmail.com</span>
          </article>
        </aside>
        <div></div>
      </section>
      <section>
        <img src={me} alt="Mohd Saalim" />
      </section>
      <BsChevronDown size={"4rem"} className="homeArrow" />
    </section>
  );
};

export default Home;
