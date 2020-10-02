import { motion } from "framer-motion";
import React from "react";

const Section6 = () => {
  return (
    <motion.section
      key="six"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Section 6
    </motion.section>
  );
};

export default Section6;
