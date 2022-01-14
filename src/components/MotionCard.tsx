import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Refresh } from "./Refresh";

function MotionCard() {
  const control = useAnimation();

  return (
    <>
      <div className="bg-white rounded-3xl w-64 h-64 cursor-pointer animate-fade-in-down">
        <motion.div
          animate={control}
          onClick={() => {
            control.start({
              x: 1500,
              transition: { duration: 2 },
            });
          }}
        />
      </div>
    </>
  );
}

export default MotionCard;
