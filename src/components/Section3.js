import { motion } from "framer-motion";
import React from "react";

const Section3 = () => {
  return (
    <motion.section
      key="three"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Section 3
    </motion.section>
  );
};

export default Section3;
