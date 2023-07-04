import Image from "next/image";

function Template({data}) {
  return (
    <div className=" ml-8 flex items-center min-h-screen relative">
      {/* Middle Cards */}
      <div className=" z-20 w-[304px] h-[371.56px] bg-white rounded-[8px] mx-16 flex flex-col items-center justify-center">
        <div className=" left-[-2rem] top-[-3.5rem] relative bg-[#F1F8FF] rounded-full w-[112.59px] h-[112.59px]">
          <Image
            src={data.svg1}
            width={70.06}
            height={115.56}
            className=" absolute right-[-2rem] top-[-0.4rem]"
            alt="svg"
          />
        </div>
        <div className=" text-[#1F1F1F] font-bold text-2xl">{data.h2}</div>
      </div>
      {/* End Middle Cards */}

      {/* Side heading & paragraph */}
      <div className=" w-[28.688rem] gap-2 flex flex-col">
        <h1 className=" text-4xl font-bold">{data.h1}</h1>
        <p>{data.p}</p>
      </div>
      {/* End Side heading & paragraph */}

      {/* Two flooted SVGs */}
      <Image
        src={data.svg2}
        width={69.0}
        height={69.0}
        className=" absolute top-[12%] left-[28%] w-auto h-auto "
        alt="svg1"
      />
      <Image
        src={data.svg2}
        width={69.0}
        height={69.0}
        className=" absolute bottom-[30%] right-[20%] w-auto h-auto rotate-90"
        alt="svg2"
      />
      {/* End SVGs */}

      {/* Sports Images */}
      <Image
        src={data.img1}
        width={240}
        height={170}
        className=" absolute top-0 right-[12%]"
        alt="img1"
      />
      <Image
        src={data.img2}
        width={290}
        height={553}
        className=" absolute right-0 z-10"
        alt="img2"
      />
      <Image
        src={data.img3}
        width={240}
        height={170}
        className=" absolute bottom-0 right-[15%] z-20"
        alt="img3"
      />
      {/* End Sports Images */}

      {/* Two blur cards flooting up & down */}
      <div className=" z-10 bottom-[-2rem] left-1 absolute scale-[.70] opacity-50 blur w-[304px] h-[371.56px] bg-white rounded-[8px] mx-16 flex flex-col items-center justify-center">
        <div className=" left-[-2rem] top-[-3.5rem] relative bg-[#F1F8FF] rounded-full w-[112.59px] h-[112.59px]">
          <Image
            src={"/badminton-small.svg"}
            width={70.06}
            height={115.56}
            className=" absolute right-[-2rem] top-[-0.4rem]"
            alt="blur img"
          />
        </div>
        <div className=" text-[#1F1F1F] font-bold text-2xl">BADMINTON</div>
      </div>
      <div className=" z-10 top-[-2rem] left-1 absolute scale-[.70] opacity-50 blur w-[304px] h-[371.56px] bg-white rounded-[8px] mx-16 flex flex-col items-center justify-center">
        <div className=" left-[-2rem] top-[-3.5rem] relative bg-[#F1F8FF] rounded-full w-[112.59px] h-[112.59px]">
          <Image
            src={"/badminton-small.svg"}
            width={70.06}
            height={115.56}
            className=" absolute right-[-2rem] top-[-0.4rem]"
            alt="blur img"
          />
        </div>
        <div className=" text-[#1F1F1F] font-bold text-2xl">BADMINTON</div>
      </div>
      {/* End */}
    </div>
  );
}

export default Template;
