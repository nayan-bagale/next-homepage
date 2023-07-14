"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Mob({ data, setMobile, mobile }) {
  console.log(mobile)
  return (
    <AnimatePresence>
      <div className={" w-full "} style={{ display: mobile ? "" : "none" }}>
        <motion.div
          className=" bg-white w-full min-h-[35vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-rows-2 grid-flow-col">
            <Image
              src={data.img[1]}
              width={250}
              height={0}
              alt="img"
              className="col-span-1 self-end"
            />
            <Image
              src={data.img[3]}
              width={250}
              height={0}
              alt="img"
              className="col-span-1 self-start"
            />
            <Image
              src={data.img[2]}
              width={250}
              height={0}
              alt="img"
              className="row-span-2"
            />
          </div>
        </motion.div>
        <motion.div
          className=" bg-white shadow rounded-t-[3rem] w-full min-h-[65vh] p-10 flex flex-col gap-4 absolute bottom-0 pb-[6rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={"/close.svg"}
            width={20}
            height={0}
            alt="close"
            className=" z-10 right-10 top-10 absolute cursor-pointer"
            onClick={() => setMobile(false)}
          />
          <motion.div
            className=" flex items-end gap-4 mb-2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className=" w-[4rem] h-[4rem] rounded-full bg-[#F1F8FF] relative">
              <Image
                src={data.svg[1].img}
                width={data.svg[1].widthMob}
                height={0}
                className={data.svg[1].positionMob}
                alt={"badminton"}
              />
            </div>
            <div
              className=" ml-4 text-lg font-dosis font-bold scale-y-150 absolute bottom-[-1rem] left-[4.2rem]"
              style={{
                color: data.color,
              }}
            >
              {data.h2}
            </div>
          </motion.div>
          <div className=" text-base font-bold font-dosis text-black scale-y-150 my-2 mt-4">
            {data.h1}
          </div>
          <div className=" text-justify text-xs text-black">{data.p}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Mob;
