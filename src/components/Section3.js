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
    transition: {
      ...transition,
      duration: 1,
      type: "spring",
      bounce: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  leave: {
    y: 100,
    opacity: 0,
    transition: {
      ...transition,
      duration: 0.5,
      type: "spring",
      bounce: 0.1,
      delay: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const circleVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: 20,
    x: 20,
    z: 20,
  },
  visible: {
    scale: 1,
    x: 0,
    y: 0,
    z: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
  leave: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.01,
    },
  },
};

const bellVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: -380,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
  leave: {
    scale: 0,
    rotate: -380,
    opacity: 0,
    transition: {
      duration: 0.01,
      delay: 0.1,
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
      delay: 0.4,
    },
  },
  leave: {
    y: 50,
    opacity: 0,
    delay: 0.1,
  },
};

const notVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
    },
  },
  leave: {
    opacity: 0,
    delay: 0.1,
  },
};

const Section3 = () => {
  return (
    <motion.section
      variants={sectionVariant}
      key="one"
      exit="leave"
      initial="hidden"
      animate="visible"
      transition={{ ...transition }}
    >
      <div className="section-inner section-3">
        <div className="left">
          <div className="title">
            <span>
              <motion.span
                variants={titleVariant}
                transition={{ ...transition, delay: 0.1 }}
                className="hide-text"
              >
                <span>Sending Money</span>
              </motion.span>
            </span>
            <br />
            <span>
              <motion.span
                variants={titleVariant}
                transition={{ ...transition, delay: 0.2 }}
                className="hide-text"
              >
                <span>
                  Can Be Fun Too{" "}
                  <span role="img" aria-label="dancing-woman">
                    💃🏽
                  </span>
                </span>
              </motion.span>
            </span>
          </div>
          <motion.div
            variants={titleVariant}
            transition={{ ...transition, delay: 0.1 }}
            className="sub"
          >
            Send money to people on your contact list using their phone numbers
            or via payment links that can be shared however you decide or even
            using bank accounts.
          </motion.div>

          <motion.div
            variants={titleVariant}
            transition={{ ...transition, delay: 0.1 }}
            className="buttons"
          >
            <div className="button button-txt">
              <div className="coming">Coming soon</div>
            </div>
            <div className="button button-txt">
              <div className="coming">Coming soon</div>
            </div>
          </motion.div>
        </div>
        <div className="right">
          <motion.div variants={notVariant} className="notification">
            <img
              src="https://abeg.app/static/media/notification.322758bd.png"
              alt=""
            />
          </motion.div>
          <motion.div variants={imageVariant} className="right-bg">
            <motion.div variants={phoneVariant} className="phone">
              <img
                src="https://abeg.app/static/media/lock-screen.50390647.png"
                alt=""
              />
            </motion.div>

            <motion.div variants={bellVariant} className="circle bell-con">
              <i class="fas fa-bell"></i>
            </motion.div>
            <div className="circle circle-1">
              <motion.div
                variants={circleVariant}
                className="inner-circle"
              ></motion.div>
            </div>
            <div className="circle circle-2">
              <motion.div
                variants={circleVariant}
                className="inner-circle"
              ></motion.div>
            </div>
            <div className="circle circle-3">
              <motion.div
                variants={circleVariant}
                className="inner-circle"
              ></motion.div>
            </div>
            <div className="circle circle-4">
              <motion.div
                variants={circleVariant}
                className="inner-circle"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Section3;
