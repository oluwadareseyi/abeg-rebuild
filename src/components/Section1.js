import { motion } from "framer-motion";
import React from "react";
import { transition } from "../utils";

const spring = { type: "spring", bounce: 0.7, stiffness: 200, duration: 0.8 };

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

const bubble1 = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: { ...spring },
  },
  leave: {
    scale: 0.5,
    opacity: 0,
    transition: { ...spring, duration: 0.7, bounce: 0.6 },
  },
};

const bubble2 = {
  hidden: {
    scale: 0,
    x: 140,
    y: 140,
  },
  visible: {
    scale: 1,
    x: 140,
    y: 140,
    transition: { ...spring, delay: 0.1 },
  },
  leave: {
    scale: 0.5,
    x: 140,
    opacity: 0,
    y: 140,
    transition: { ...spring, delay: 0.1, duration: 0.5 },
  },
};

const bubble3 = {
  hidden: {
    scale: 0,
    x: -140,
    y: -140,
  },
  visible: {
    scale: 1,
    x: -140,
    y: -140,
    transition: { ...spring, delay: 0.2 },
  },
  leave: {
    scale: 0.5,
    x: -140,
    opacity: 0,
    y: -140,
    transition: { ...spring, delay: 0.2, duration: 0.5 },
  },
};

const bubble4 = {
  hidden: {
    scale: 0,
    x: 140,
    y: -140,
  },
  visible: {
    scale: 1,
    x: 140,
    y: -140,
    transition: { ...spring, delay: 0.3 },
  },
  leave: {
    scale: 0.5,
    opacity: 0,
    x: 140,
    y: -140,
    transition: { ...spring, delay: 0.3, duration: 0.5 },
  },
};

const bubble5 = {
  hidden: {
    scale: 0,
    x: -140,
    y: 140,
  },
  visible: {
    scale: 1,
    x: -140,
    y: 140,
    transition: { ...spring, delay: 0.4 },
  },
  leave: {
    scale: 0.5,
    opacity: 0,
    x: -140,
    y: 140,
    transition: { ...spring, delay: 0.4, duration: 0.5 },
  },
};

const Section1 = () => {
  return (
    <motion.section
      variants={sectionVariant}
      key="one"
      exit="leave"
      initial="hidden"
      animate="visible"
      transition={{ ...transition }}
    >
      <div className="section-inner section-1">
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

        <div className="right">
          <motion.div
            variants={bubble1}
            className="circle circle-1"
          ></motion.div>
          <motion.div
            variants={bubble2}
            className="circle circle-2"
          ></motion.div>
          <motion.div
            variants={bubble3}
            className="circle circle-3"
          ></motion.div>
          <motion.div
            variants={bubble4}
            className="circle circle-4"
          ></motion.div>
          <motion.div
            variants={bubble5}
            className="circle circle-5"
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section1;
