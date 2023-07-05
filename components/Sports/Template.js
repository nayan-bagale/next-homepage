import Image from "next/image";

function Template({ data, all_data }) {
  return (
    <div className=" ml-32 flex items-center min-h-screen relative">
      {/* Middle Cards */}
      <div className=" relative z-20 w-[304px] h-[371.56px] bg-white rounded-[8px] mx-16 flex flex-col items-center justify-center">
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
      </div>
      {/* End Middle Cards */}

      {/* Side heading & paragraph */}
      <div className=" w-[50rem] gap-2 flex flex-col">
        <h1 className=" font-bison text-5xl font-bold">{data.h1}</h1>
        <p className=" text-base leading-8">{data.p}</p>
      </div>
      {/* End Side heading & paragraph */}

      {/* Two flooted SVGs */}
      <Image
        src={data.svg[2].img}
        width={69.0}
        height={69.0}
        className=" absolute top-[20%] left-[20%] w-auto h-auto "
        alt="svg1"
      />
      <Image
        src={data.svg[2].img}
        width={69.0}
        height={69.0}
        className=" absolute bottom-[28%] right-[23%] w-auto h-auto -scale-x-100"
        alt="svg2"
      />
      {/* End SVGs */}

      {/* Sports Images */}
      <Image
        src={data.img[1]}
        width={343}
        height={248}
        className=" absolute top-0 right-[12%]"
        alt="img1"
      />
      <Image
        src={data.img[2]}
        width={359}
        height={753}
        className=" absolute right-0 z-10"
        alt="img2"
      />
      <Image
        src={data.img[3]}
        width={270}
        height={250}
        className=" absolute bottom-0 right-[18%] z-20"
        alt="img3"
      />
      {/* End Sports Images */}

      {/* Two blur cards flooting up & down */}
      <div className=" z-10 top-[2rem] left-1 absolute scale-[.70] opacity-50 blur w-[304px] h-[371.56px] bg-white rounded-[8px] mx-16 flex flex-col items-center justify-center">
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
      </div>

      <div className=" z-10 bottom-[2rem] left-1 absolute scale-[.70] opacity-50 blur w-[304px] h-[371.56px] bg-white rounded-[8px] mx-16 flex flex-col items-center justify-center">
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
      </div>

      {/* End */}
    </div>
  );
}

export default Template;
