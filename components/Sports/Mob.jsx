"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function Mob({ data, setMobile, mobile }) {
  return (
    <div className=" w-full"
      style={{ display: mobile ? '' : 'none'}}
    >
      <div className=" bg-slate-500 w-full min-h-[40vh]">
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
      </div>
      <motion.div className=" bg-white shadow rounded-t-[3rem] w-full min-h-[60vh] p-10 flex flex-col gap-4 absolute bottom-0 pb-[6rem]"
      initial={{ y: 600, opacity:0 }}
      animate={{ y: 0, opacity:1 }}
      transition={{ duration:2}}
      >
        <Image
          src={"/close.svg"}
          width={20}
          height={0}
          alt="close"
          className=" right-10 top-10 absolute cursor-pointer"
          onClick={() => setMobile(false)}
        />
        <div className=" flex items-end gap-4 mb-2">
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
            className=" ml-4 text-xl font-dosis font-bold"
            style={{
              color: data.color,
            }}
          >
            {data.h2}
          </div>
        </div>
        <div className=" text-lg font-bold font-dosis text-black">
          {data.h1}
        </div>
        <div className=" text-justify text-xs text-black">{data.p}</div>
      </motion.div>
    </div>
  );
}

export default Mob;
