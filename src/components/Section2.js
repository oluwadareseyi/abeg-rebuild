import { motion } from "framer-motion";
import React from "react";
import { transition } from "../utils";

const sectionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
    transition: { ...transition, delay: 0.7 },
  },
};

const titleVariant = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
  },
  leave: {
    y: 50,
    transition: { ...transition, delay: 0.7 },
  },
};

const Section2 = () => {
  return (
    <motion.section
      variants={sectionVariant}
      key="two"
      exit="leave"
      initial="hidden"
      animate="visible"
      transition={{ ...transition }}
    >
      <div className="section-inner">
        <div className="left">
          <div className="title">
            <span>
              <motion.span
                variants={titleVariant}
                transition={{ ...transition, delay: 0.1 }}
                className="hide-text"
              >
                <span>Make Someone</span>
              </motion.span>
            </span>
            <br />
            <span>
              <motion.span
                variants={titleVariant}
                transition={{ ...transition, delay: 0.2 }}
                className="hide-text"
              >
                <span>Happy With Cash</span>
              </motion.span>
            </span>
          </div>
          <motion.div
            variants={titleVariant}
            transition={{ ...transition, delay: 0.1 }}
            className="sub"
          >
            Do you want to pay for the food you ordered for a friend, send money
            to your babe or friends? use Anon.
          </motion.div>

          <motion.div
            variants={titleVariant}
            transition={{ ...transition, delay: 0.1 }}
            className="buttons"
          >
            <div className="button">
              <div className="coming">Coming soon</div>
              <div className="app">App Store</div>
            </div>
            <div className="button">
              <div className="coming">Coming soon</div>
              <div className="app">Google Play</div>
            </div>
          </motion.div>
        </div>
        <div className="right"></div>
      </div>
    </motion.section>
  );
};

export default Section2;
