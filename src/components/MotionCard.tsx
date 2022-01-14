import React from "react";
import { motion } from "framer-motion";

function MotionCard(props) {
  return (
    <div>
      <h1 className="text-2xl text-white">This is a motion card</h1>
      <motion.div animate={{ scale: 0.5 }} transition={{ duration: 0.5 }} />
    </div>
  );
}

export default MotionCard;
