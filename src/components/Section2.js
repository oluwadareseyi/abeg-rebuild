import { motion } from "framer-motion";
import React from "react";

const Section2 = () => {
  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Section 2
    </motion.section>
  );
};

export default Section2;
