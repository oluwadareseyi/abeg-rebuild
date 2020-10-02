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
        <div className="right"></div>
      </div>
    </motion.section>
  );
};

export default Section3;
