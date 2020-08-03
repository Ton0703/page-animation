import React from "react";
import { motion } from "framer-motion";

const E = () => {
  return (
    <motion.div className="wrapper">
      E
      <motion.div
        className="panel-e"
        initial={{ opacity: 1  }}
        animate={{ opacity: [0, 0] , height: [window.innerHeight, 0]}}
        exit={{ opacity: [0, 1], height: [window.innerHeight, window.innerHeight] }}
        transition={{ duration: 1, ease: [0.6, 0.5, 0.01, 0.9] }}
      ></motion.div>
    </motion.div>
  );
};

export default E;