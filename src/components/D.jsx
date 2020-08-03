import React from "react";
import { motion } from "framer-motion";

const D = () => {
  return (
    <motion.div className="wrapper">
      D
      <motion.div
        className="panel-d"
        initial={{ height: window.innerWidth * 1.5, width: window.innerWidth * 1.5 }}
        animate={{ height: 0, width: 0}}
        exit={{ height: window.innerWidth * 1.5, width: window.innerWidth* 1.5 }}
        transition={{ duration: 0.8, ease: [0.6, 0.5, 0.01, 0.9] }}
      ></motion.div>
    </motion.div>
  );
};

export default D;