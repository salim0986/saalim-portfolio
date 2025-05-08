import React from "react";
import { TbBrandReact, TbBrandRedux } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const frames = {
    service1: {
      initial: {
        opacity: 0,
        x: "-100%",
      },
      whileInView: {
        opacity: 1,
        x: 0,
      },
    },
    service2: {
      initial: {
        opacity: 0,
        y: "-150%",
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
    },
    service3: {
      initial: {
        opacity: 0,
        y: "-200%",
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
    },
    service4: {
      initial: {
        opacity: 0,
        y: "50%",
        x: "10%",
      },
      whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
      },
    },
  };
  return (
    <section id="services">
      <div>
        <h2>Services</h2>
      </div>
      <section>
        <motion.div {...frames.service1}>
          <span className="number">3+</span>
          <h4>Years Experience</h4>
        </motion.div>
        <motion.div {...frames.service2}>
          <span>
            <BiLogoTypescript />
          </span>
          <h4>TypeScript</h4>
        </motion.div>
        <motion.div {...frames.service3}>
          <span>
            <TbBrandReact />
          </span>
          <h4>REACT JS</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <TbBrandRedux />
          </span>
          <h4>REDUX TOOLKIT & QUERY</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <FaNodeJs />
          </span>
          <h4>NODE JS</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <SiNextdotjs />
          </span>
          <h4>NEXT JS</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <SiMongodb />
          </span>
          <h4>SQL & NOSQL DATABASE</h4>
        </motion.div>
      </section>
    </section>
  );
};

export default Services;
