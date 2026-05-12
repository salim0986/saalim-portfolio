import React from "react";
import { TbBrandReact } from "react-icons/tb";
import {
  SiExpress,
  SiFastapi,
  SiLanggraph,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { LuTreePine } from "react-icons/lu"
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
        <h2>Prime Stack</h2>
      </div>
      <section>
        <motion.div {...frames.service1}>
          <span className="number">2+</span>
          <h4>Years Experience</h4>
        </motion.div>
        <motion.div {...frames.service2}>
          <span>
            <SiNextdotjs />
          </span>
          <h4>Next.js</h4>
        </motion.div>
        <motion.div {...frames.service3}>
          <span>
            <SiExpress />
          </span>
          <h4>Express.js</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <SiFastapi />
          </span>
          <h4>FastAPI</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <SiLanggraph />
          </span>
          <h4>LangGraph / LangChain</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <LuTreePine />
          </span>
          <h4>Pinecone</h4>
        </motion.div>
        <motion.div {...frames.service4}>
          <span>
            <SiPostgresql />
          </span>
          <h4>Postgres</h4>
        </motion.div>
      </section>
    </section>
  );
};

export default Services;
