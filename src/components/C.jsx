import React from "react";
import { motion } from "framer-motion";

const C = () => {
    const transition = { duration: 0.8, ease: [0.6, 0.5, 0.01, 0.9] }
  return (
    <div className="wrapper">
      CCC
      <>
      <motion.div
        className="panel-c-left"
        initial={{ height: window.innerHeight }}
        animate={{ height: 0 }}
        exit={{ height: window.innerHeight}}
        transition={transition}
      ></motion.div>
      <motion.div
        className="panel-c-right"
        initial={{ height: window.innerHeight }}
        animate={{ height: 0 }}
        exit={{ height: window.innerHeight }}
        transition={transition}
      ></motion.div>
      </>
    </div>
  );
};

export default C;