import { motion } from "framer-motion";
import React from "react";

const Section4 = () => {
  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Section 4
    </motion.section>
  );
};

export default Section4;
