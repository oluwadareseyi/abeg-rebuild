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
    transition: { ...transition, delay: 0.8 },
  },
};

const innerVariant = {
  hidden: {
    rotateY: -90,
  },
  visible: {
    rotateY: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
      delay: 0.4,
    },
  },
  leave: {
    rotateY: -90,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.3,
      delay: 0.7,
    },
  },
};

const phoneVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  leave: {
    y: 50,
    opacity: 0,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
};

const phone2Variant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  leave: {
    y: 50,
    opacity: 0,
    transition: {
      delay: 0.4,
      duration: 0.3,
    },
  },
};

const phone3Variant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  leave: {
    y: 50,
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

const Section4 = () => {
  return (
    <motion.section
      variants={sectionVariant}
      key="four"
      exit="leave"
      initial="hidden"
      animate="visible"
      transition={{ ...transition }}
    >
      <motion.div
        variants={innerVariant}
        transition={{ ...transition }}
        className="inner-section section-4"
      >
        <motion.div variants={phoneVariant} className="title">
          Just Go Cashless, Abeg
        </motion.div>
        <motion.div variants={phone2Variant} className="buttons">
          <div className="button">
            <div className="coming">Coming soon</div>
            <div className="app">App Store</div>
          </div>
          <div className="button">
            <div className="coming">Get it on</div>
            <div className="app">Google Play</div>
          </div>
        </motion.div>
        <motion.img
          variants={phone3Variant}
          src="https://abeg.app/static/media/placard-screenshot.a5cd8f5e.png"
          alt=""
        />
      </motion.div>
    </motion.section>
  );
};

export default Section4;
