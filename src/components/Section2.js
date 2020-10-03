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
    transition: { ...transition, delay: 0.5 },
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
    transition: { ...transition, delay: 0.5 },
  },
};

const imageVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ...transition, duration: 1, type: "spring", bounce: 0.4 },
  },
  leave: {
    y: 100,
    opacity: 0,
    transition: {
      ...transition,
      duration: 0.7,
      type: "spring",
      bounce: 0.2,
      delay: 0.5,
    },
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
      <div className="section-inner section-2">
        <div className="left">
          <div className="title">
            <span>
              <motion.span
                variants={titleVariant}
                transition={{ ...transition, delay: 0.1 }}
                className="hide-text"
              >
                <span>Digitally Kick A**</span>
              </motion.span>
            </span>
          </div>
          <motion.div
            variants={titleVariant}
            transition={{ ...transition, delay: 0.1 }}
            className="sub"
          >
            With Anon you get a digital wallet that can be funded by a transfer
            from any bank.
          </motion.div>

          <motion.div
            variants={titleVariant}
            transition={{ ...transition, delay: 0.1 }}
            className="buttons"
          >
            <div className="button button-txt">
              <div className="coming">Withdraw your cash</div>
            </div>
            <div className="button button-txt">
              <div className="coming">Fund your wallet</div>
            </div>
          </motion.div>
        </div>
        <div className="right">
          <motion.div variants={imageVariant} className="right-bg">
            <img
              src="https://abeg.app/static/media/phone-wallet.f67dfaf4.png"
              alt="phone"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section2;
