import React from "react";
import { motion } from "framer-motion";

const B = () => {
  const transition = { duration: 0.8, ease: [0.6, 0.5, 0.01, 0.9] };
  return (
    <motion.div className="wrapper">
      BBBBBB
      <>
        <motion.div
          className="panel-b-top"
          initial={{ width: window.innerWidth }}
          animate={{ width: 0 }}
          exit={{ width: window.innerWidth }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="panel-b-bottom"
          initial={{ width: window.innerWidth }}
          animate={{ width: 0 }}
          exit={{ width: window.innerWidth }}
          transition={transition}
        ></motion.div>
      </>
    </motion.div>
  );
};

export default B;
