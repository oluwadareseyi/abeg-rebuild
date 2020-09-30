import { motion } from "framer-motion";
import React from "react";

const Section1 = () => {
  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Section 1
    </motion.section>
  );
};

export default Section1;
