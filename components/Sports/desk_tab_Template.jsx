"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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

  return (
    <motion.div
      className=" md:ml-16 lg:ml-32 flex items-center min-h-[100vh] relative"
      key={data.h2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Up card */}
      <motion.div
        className=" z-10 md:top-[4rem] lg:top-[2rem] left-1 absolute md:scale-[.70] lg:scale-[.70] opacity-50 blur md:w-[250px] md:h-[300px] lg:w-[304px] lg:h-[371.56px] bg-white rounded-[8px] md:mx-8 lg:mx-16 flex flex-col items-center justify-center"
        initial={
          boolean ? varientObj.upTrue.initial : varientObj.downFalse.initial
        }
        // initial={{ y: 200, scale: 0.5, filter: "blur(5px)" }}
        animate={varientObj.default.animate}
        transition={varientObj.default.transition}
      >
        <div className=" left-[-2rem] top-[-3.5rem] relative bg-[#F1F8FF] rounded-full w-[112.59px] h-[112.59px]">
          <Image
            src={all_data[data.blur_cards.up].svg[1].img}
            width={all_data[data.blur_cards.up].svg[1].width}
            height={115.56}
            className={
              " absolute " + all_data[data.blur_cards.up].svg[1].position
            }
            alt="blur img"
          />
        </div>
        <div className=" text-[#1F1F1F] font-bold text-2xl">
          {all_data[data.blur_cards.up].h2}
        </div>
      </motion.div>
      {/* End Up card */}

      {/* Middle Cards */}
      <motion.div
        className=" relative z-20 md:w-[250px] md:h-[300px] lg:w-[304px] lg:h-[371.56px] bg-white rounded-[8px] md:mx-8 lg:mx-16 flex flex-col items-center justify-center"
        initial={{ y: transitionVal, scale: 0.5, filter: "blur(5px)" }}
        // initial={{ y: 300, scale: 0.5, filter: "blur(5px)" }}
        animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
      >
        <div className=" left-[-2rem] top-[-2.5rem] relative bg-[#F1F8FF] rounded-full md:w-[80px] md:h-[80px] lg:w-[112.59px] lg:h-[112.59px]">
          <Image
            src={data.svg[1].img}
            width={data.svg[1].width}
            height={115.56}
            className={" absolute " + data.svg[1].position}
            alt="svg"
          />
        </div>
        <div className=" absolute text-[#1F1F1F] font-bison font-bold md:text-lg lg:text-2xl bottom-[25%] left-[21%]">
          {data.h2}
        </div>
      </motion.div>
      {/* End Middle Cards */}

      {/* Down card */}
      <motion.div
        className=" z-10 md:bottom-[4rem] lg:bottom-[2rem] left-1 absolute scale-[.70] opacity-50 blur md:w-[250px] md:h-[300px] lg:w-[304px] lg:h-[371.56px] bg-white rounded-[8px] md:mx-8 lg:mx-16 flex flex-col items-center justify-center"
        initial={
          boolean ? varientObj.downTrue.initial : varientObj.upFalse.initial
        }
        // initial={{ y: 200, scale: 1, filter: "blur(5px)" }}
        animate={varientObj.default.animate}
        transition={varientObj.default.transition}
      >
        <div className=" left-[-2rem] top-[-3.5rem] relative bg-[#F1F8FF] rounded-full w-[112.59px] h-[112.59px]">
          <Image
            src={all_data[data.blur_cards.down].svg[1].img}
            width={all_data[data.blur_cards.down].svg[1].width}
            height={115.56}
            className={
              " absolute " + all_data[data.blur_cards.down].svg[1].position
            }
            alt="blur img"
          />
        </div>
        <div className=" text-[#1F1F1F] font-bold text-2xl">
          {all_data[data.blur_cards.down].h2}
        </div>
      </motion.div>
      {/* End Down card */}

      {/* Side heading & paragraph */}
      <div className=" md:w-[35%] lg:w-[40%] gap-2 flex flex-col">
        <h1 className=" text-white font-bison md:text-3xl lg:text-5xl font-bold">
          {data.h1}
        </h1>
        <p className=" text-white md:text-sm lg:text-base leading-8">
          {data.p}
        </p>
      </div>
      {/* End Side heading & paragraph */}

      {/* Two flooted SVGs */}
      <Image
        src={data.svg[2].img}
        width={69.0}
        height={69.0}
        className=" absolute md:top-[25%] md:left-[30%] lg:top-[20%] lg:left-[20%] md:w-[50px] lg:w-auto lg:h-auto "
        alt="svg1"
      />
      <Image
        src={data.svg[2].img}
        width={69.0}
        height={69.0}
        className=" absolute md:bottom-[30%] md:right-[30%] lg:bottom-[28%] lg:right-[23%] md:w-[50px] lg:w-auto lg:h-auto -scale-x-100"
        alt="svg2"
      />
      {/* End SVGs */}

      {/* Sports Images */}
      <Image
        src={data.img[1]}
        width={343}
        height={248}
        className=" absolute md:top-[4rem] lg:top-0 right-[12%] lg:w-[343px] md:w-[250px] "
        alt="img1"
      />
      <Image
        src={data.img[2]}
        width={359}
        height={753}
        className=" absolute right-0 z-10 lg:w-[350px] md:w-[250px] "
        alt="img2"
      />
      <Image
        src={data.img[3]}
        width={270}
        height={250}
        className=" absolute md:bottom-[4rem] lg:bottom-0 right-[18%] z-20 lg:w-[260px] md:w-[210px]"
        alt="img3"
      />
      {/* End Sports Images */}
    </motion.div>
  );
}

export default Template;
