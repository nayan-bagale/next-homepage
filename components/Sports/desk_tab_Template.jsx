"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function Template({ select, all_data, boolean }) {

  const data = all_data[select];

  const varientObj = {
    default: {
      animate: { y: 0, scale: 0.7 },
      transition: { duration: 0.6 },
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
      className=" md:ml-16 lg:ml-16 xl:ml-32 flex items-center min-h-[100vh] relative"
      key={data.h2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Up card */}
      <motion.div
        className=" z-10 md:top-[4rem] lg:top-[2rem] left-1 absolute md:scale-[.70] lg:scale-[.70] opacity-50 blur md:w-[200px] md:h-[290px] lg:w-[250px] lg:h-[300] xl:w-[304px] xl:h-[371.56px] bg-white rounded-[8px] md:mx-8 lg:mx-16 flex flex-col items-center justify-center"
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
        <div className=" absolute text-[#1F1F1F] font-bison scale-y-150 font-bold md:text-base lg:text-lg xl:text-2xl bottom-[25%] left-[15%]">
          {all_data[data.blur_cards.up].h2}
        </div>
      </motion.div>
      {/* End Up card */}

      {/* Middle Cards */}
      <motion.div
        className=" relative z-20 md:w-[200px] md:h-[290px] lg:w-[250px] lg:h-[300] xl:w-[304px] xl:h-[371.56px] bg-white rounded-[8px] md:mx-8 lg:mx-16 flex flex-col items-center justify-center"
        initial={{ y: transitionVal, scale: 0.5, filter: "blur(5px)" }}
        // initial={{ y: 300, scale: 0.5, filter: "blur(5px)" }}
        animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
        transition={varientObj.default.transition}
      >
        <div className=" left-[-2rem] top-[-2.5rem] relative bg-[#F1F8FF] rounded-full md:w-[80px] md:h-[80px] lg:w-[80.59px] lg:h-[80.59px] xl:w-[112px] xl:h-[112px]">
          <Image
            src={data.svg[1].img}
            width={data.svg[1].width}
            height={115.56}
            className={" absolute " + data.svg[1].position}
            alt="svg"
          />
        </div>
        <div className=" absolute text-[#1F1F1F] font-bison scale-y-150 font-bold md:text-base lg:text-lg xl:text-2xl bottom-[25%] left-[15%]">
          {data.h2}
        </div>
      </motion.div>
      {/* End Middle Cards */}

      {/* Down card */}
      <motion.div
        className=" z-10 md:bottom-[4rem] lg:bottom-[2rem] left-1 absolute scale-[.70] opacity-50 blur md:w-[200px] md:h-[290px] lg:w-[250px] lg:h-[300] xl:w-[304px] xl:h-[371.56px] bg-white rounded-[8px] md:mx-8 lg:mx-16 flex flex-col items-center justify-center"
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
        <div className=" absolute text-[#1F1F1F] font-bison scale-y-150 font-bold md:text-base lg:text-lg xl:text-2xl bottom-[25%] left-[15%]">
          {all_data[data.blur_cards.down].h2}
        </div>
      </motion.div>
      {/* End Down card */}

      {/* Side heading & paragraph */}
      <div className=" md:w-[25%] lg:w-[30] xl:w-[34%] gap-16 flex flex-col items-start h-full">
        <h1 className=" text-white font-bison md:text-2xl lg:text-3xl xl:text-4xl font-bold scale-y-150">
          {data.h1}
        </h1>
        <p className=" text-white md:text-xs lg:text-sm xl:text-md leading-6 scale-y-150">
          {data.p}
        </p>
      </div>
      {/* End Side heading & paragraph */}

      {/* Two flooted SVGs */}
      <Image
        src={data.svg[2].img}
        width={69.0}
        height={69.0}
        className=" absolute md:top-[20%] md:left-[30%] lg:top-[20%] lg:left-[25%] md:w-[60px] lg:w-auto lg:h-auto "
        alt="svg1"
      />
      <Image
        src={data.svg[2].img}
        width={69.0}
        height={69.0}
        className=" absolute md:bottom-[30%] md:right-[30%] lg:bottom-[28%] lg:right-[25.5%] md:w-[50px] lg:w-auto lg:h-auto -scale-x-100"
        alt="svg2"
      />
      {/* End SVGs */}

      {/* Sports Images */}
      <Image
        src={data.img[1]}
        width={343}
        height={248}
        className=" absolute md:top-[4rem] lg:top-0 right-[12%] xl:w-[343px] lg:w-[300px] md:w-[250px] "
        alt="img1"
      />
      <Image
        src={data.img[2]}
        width={359}
        height={753}
        className=" absolute right-0 z-10 xl:w-[350px] lg:w-[300px] md:w-[250px] "
        alt="img2"
      />
      <Image
        src={data.img[3]}
        width={270}
        height={250}
        className=" absolute md:bottom-[4rem] lg:bottom-0 right-[18%] z-20 xl:w-[260px] lg:w-[230] md:w-[200px]"
        alt="img3"
      />
      {/* End Sports Images */}
    </motion.div>
  );
}

export default Template;
