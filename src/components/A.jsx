import React from "react";
import { motion } from "framer-motion";

const A = () => {
  return (
    <motion.div className="wrapper">
      A
      <motion.div
        className="panel"
        initial={{ height: window.innerHeight }}
        animate={{ height: 0 }}
        exit={{ height: window.innerHeight }}
        transition={{ duration: 0.8, ease: [0.6, 0.5, 0.01, 0.9] }}
      ></motion.div>
    </motion.div>
  );
};

export default A;
