"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";

export const Video = () => {
  const videoSource = "/images/girltravelc.mp4";
  return (
    <div className="-z-10 fixed top-[4rem] w-full h-full overflow-hidden object-cover  ">
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        className="w-full h-full object-cover "
      >
        <source src={videoSource} type="video/mp4" />
      </video>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: [1, 1, 2, 1, 1],
            rotate: [0, 0, 360, 0],
            opacity: 1,
            transition: {
              delay: 0.4,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              // repeat: Infinity,
              repeatDelay: 1,
              duration: 3,
            },
          },
        }}
        className="w-full absolute text-center opacity-75 top-[20%] left-[35%]  "
      >
        <div className="w-[30%] flex justify-center items-center flex-col">
          <Image src="/images/logo.png" alt="logo" width={500} height={500} />
          <p className="text-white x-30 text-lg md:text-2xl capitalize md:-mt-2 ">
            join my travel adventures
          </p>{" "}
          <div className="z-20 text-white text-3xl animate-bounce mt-11 ">
            <RxDoubleArrowDown />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
