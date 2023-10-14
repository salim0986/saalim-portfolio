import React from "react";
import { TbBrandJavascript, TbBrandReact, TbBrandRedux } from "react-icons/tb";
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
          <span className="number">2+</span>
          <h4>Years Experience</h4>
        </motion.div>
        <motion.div {...frames.service2}>
          <span>
            <TbBrandJavascript />
          </span>
          <h4>Frontend Web</h4>
        </motion.div>
        <motion.div {...frames.service3}>
          <span>
            <TbBrandReact />
          </span>
          <h4>ReactJS</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <TbBrandRedux />
          </span>
          <h4>State Management</h4>
        </motion.div>
      </section>
    </section>
  );
};

export default Services;
