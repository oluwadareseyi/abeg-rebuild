import { motion } from "framer-motion";
import React from "react";
import { transition } from "../utils";

const sectionVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  leave: {
    opacity: 0,
    y: 50,
    transition: { ...transition, delay: 0.7 },
  },
};

const Section6 = () => {
  return (
    <section className="section-5">
      <motion.div
        key="five"
        variants={sectionVariant}
        exit="leave"
        initial="hidden"
        animate="visible"
        transition={{ ...transition }}
      >
        You still came here? Tragic.
      </motion.div>
    </section>
  );
};

export default Section6;
