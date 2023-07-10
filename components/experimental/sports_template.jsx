"use client";
import Image from "next/image";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

function Template({ data, all_data, boolean }) {
  const varientObj = {
    default: {
      animate: { y: 0, scale: 0.7 },
      transition: { duration: 0.5 },
    },
    upTrue: {
      initial: { y: 200, scale: 1, filter: "blur(5px)" },
    },
    downTrue: {
      initial: { y: -200, scale: 1, filter: "blur(5px)" },
    },
    upFalse: {
      initial: { y: -200, scale: 1, filter: "blur(5px)" },
    },
    downFalse: {
      initial: { y: 200, scale: 1, filter: "blur(5px)" },
    },
  };

  const transitionVal = boolean ? 200 : -200;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  console.log(scrollYProgress)

  return (
    <motion.div
      className=" md:ml-16 lg:ml-32 flex items-center relative m-8"
      ref={ref}
      key={data.h2}
      initial={{ scale: 0.7, y:100, position:'fixed'}}
      whileInView={{scale:1, y:0, position:'relative'}}
      viewport={{amount:0.8}}
    >
        <div>{ref.current}</div>
      {/* Middle Cards */}
      <motion.div
        className=" relative z-20 w-[304px] h-[371.56px] bg-white rounded-[8px] mx-16 flex flex-col items-center justify-center"
      >
        <div className=" left-[-2rem] top-[-2.5rem] relative bg-[#F1F8FF] rounded-full w-[112.59px] h-[112.59px]">
          <Image
            src={data.svg[1].img}
            width={data.svg[1].width}
            height={115.56}
            className={" absolute " + data.svg[1].position}
            alt="svg"
          />
        </div>
        <div className=" absolute text-[#1F1F1F] font-bison font-bold text-2xl bottom-[25%] left-[21%]">
          {data.h2}
        </div>
      </motion.div>
      {/* End Middle Cards */}

    </motion.div>
  );
}

export default Template;
