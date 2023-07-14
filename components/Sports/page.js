"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Template from "./desk_tab_Template";
import { motion } from "framer-motion";
import Mob from "./Mob";

const data = {
  badminton: {
    id: 1,
    color: "#009990",
    h1: "EMPOWERING BADMINTON EXCELLENCE",
    p: `With 40 full-time students residing and training in Kanha, they will receive top-notch coaching from the Pullela Gopichand Badminton Academy. Our international-quality facility boasts 14 courts, a 100-person viewing gallery, and the capacity to host tournaments at all levels. Join us as we nurture the talent of aspiring badminton players.`,
    h2: "BADMINTON",
    img: {
      1: "/badminton-img1.jpg",
      2: "/badminton-img2.jpg",
      3: "/badminton-img3.jpg",
    },
    svg: {
      1: {
        img: "/badminton-small.svg",
        widthMob: 42.03,
        width: 70.06,
        position: " right-[-1.5rem] xl:right-[-2rem] top-[-0.4rem] xl:w-[70px] w-[50px]",
        positionMob: "absolute right-[-0.8rem] top-[-3px]",
      },
      2: {
        img: "/shuttel.svg",
      },
    },
    blur_cards: {
      up: "squash",
      down: "gym",
    },
  },
  gym: {
    id: 2,
    color: "#474747",
    h1: "FITNESS OASIS AWAITS",
    p: `We have a fully equipped gym where you can begin or continue your fitness journey. There are numerous benefits to joining a gym and incorporating regular exercise into your routine. Overall, the benefits of joining a gym go beyond physical health and can positively impact mental and emotional wellbeing as well`,
    h2: "GYM",
    img: {
      1: "/gym-img1.jpg",
      2: "/gym-img2.jpg",
      3: "/gym-img3.jpg",
    },
    svg: {
      1: {
        img: "/gym-small.svg",
        widthMob: 42.03,
        width: 70.06,
        position: " right-[-1.5rem] xl:right-[-2rem] top-[-0.4rem] xl:w-[70px] w-[50px]",
        positionMob: "absolute right-[-0.8rem] top-[-3px]",
      },
      2: {
        img: "/dumbell.svg",
      },
    },
    blur_cards: {
      up: "badminton",
      down: "swimming",
    },
  },
  swimming: {
    id: 3,
    color: "#0479CE",
    h1: "SPLASH INTO WELLNESS",
    p: `Dive into the world of swimming, a beloved water-based activity that offers a full-body workout through arm and leg movements. Whether for leisure or competition, swimming engages muscles throughout the body, providing a low-impact exercise option. Our facility boasts a semi-heated indoor swimming pool with 25 meters and 5 lanes, perfect for leisurely swims or learn-to-swim programs. Additionally, it serves as an excellent venue for athlete warm-ups, cool-downs, and rehabilitation exercises. Jump in and make a splash!`,
    h2: "SWIMMING",
    img: {
      1: "/swim-img1.jpg",
      2: "/swim-img2.jpg",
      3: "/swim-img3.jpg",
    },
    svg: {
      1: {
        img: "/swim-small.svg",
        widthMob: 60.03,
        width: 100.06,
        position: "right-[-2.5rem] xl:top-[2rem] top-[1.5rem] xl:w-[100px] w-[80px]",
        positionMob: "absolute right-[-1.6rem] top-[1.5rem]",
      },
      2: {
        img: "/poolh.svg",
      },
    },
    blur_cards: {
      up: "gym",
      down: "squash",
    },
  },
  squash: {
    id: 4,
    color: "#FB491D",
    h1: "MASTER THE SQUASH",
    p: `Squash is a popular racquet sport that is played by two or four players in a four-walled court with a small, hollow rubber ball. The objective of the game is to hit the ball against the front wall, making it difficult for the opponent to return the ball. Three international-standard wooden courts Capable of hosting state and national tournaments A viewing gallery with seating for 50 persons`,
    h2: "SQUASH",
    img: {
      1: "/squash-img1.jpg",
      2: "/squash-img2.jpg",
      3: "/squash-img3.jpg",
    },
    svg: {
      1: {
        img: "/squash-small.svg",
        width: 100.06,
        widthMob: 55.03,
        position: " right-[-1.5rem] xl:right-[-2rem] top-[-0.4rem] xl:w-[100px] w-[70px]",
        positionMob: "absolute right-[-0.8rem] top-[-3px]",
      },
      2: {
        img: "/squash-mini.svg",
      },
    },
    blur_cards: {
      up: "swimming",
      down: "badminton",
    },
  },
};

function Page() {
  const [mobile, setMobile] = useState(false)
  console.log(mobile)
  const [select, setSelect] = useState("badminton");
  const [animateVal, setAnimateVal] = useState(1);

  const [boolean, setBoolean] = useState(true);
  const [totalHeight, setTotalHeight] = useState(0);

  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll1 = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight } = scrollContainerRef.current;
      setScrollPosition(scrollTop);
      setTotalHeight(scrollHeight);
    }

     // Specify the scroll length at which you want the function to be executed
      const scrollLength = totalHeight/6;

      // Check if the current scroll position is greater than or equal to the scroll length
      if (
        scrollPosition >= scrollLength &&
        scrollPosition < scrollLength + scrollLength 
      ) {
        // Call your desired function here
        yourFunction("gym");
      } else if (
        scrollPosition >= scrollLength + scrollLength &&
        scrollPosition <
          scrollLength + scrollLength + scrollLength
      ) {
        yourFunction("swimming");
      } else if (
        scrollPosition >=
        scrollLength + scrollLength + scrollLength
      ) {
        yourFunction("squash");
      } else {
        yourFunction("badminton");
      }
    };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll1);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll1);
      }
    };
  }, [scrollPosition]);

  const handleclick = (name) => {
    setSelect(name);
    setAnimateVal((prev) => {
      if (prev < data[name].id) {
        setBoolean(true);
      } else {
        setBoolean(false);
      }
      return data[name].id;
    });
  };


  // Placeholder function to be executed when scrolling reaches the specified length
  const yourFunction = ($) => {
    handleclick($);
  };

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="max-sm:hidden h-[100vh] relative overflow-scroll facility snap-start"
      >
        <motion.section
          className="  relative w-full h-[300vh]"
          id="facility"
          style={{ background: data[select].color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className=" sticky top-0">
            <div className=" absolute top-[35%] md:ml-4 lg:ml-6 xl:ml-12">
              <div
                className=" relative  w-[40px] h-[40px] xl:w-[50.63px] xl:h-[50.63px] rounded-full mb-4 cursor-pointer "
                style={{
                  backgroundColor:
                    select !== "badminton" ? "#c1e5e9" : "#FFFFFF",
                }}
                onClick={() => handleclick("badminton")}
              >
                <Image
                  src={"/badminton-icon.svg"}
                  width={35.03}
                  height={39.65}
                  className=" absolute right-[-0.90rem] top-[-0.3rem] w-[28px] xl:w-[35px]"
                  alt="icon"
                />
              </div>
              <div
                className=" relative w-[40px] h-[40px] xl:w-[50.63px] xl:h-[50.63px] rounded-full mb-4 cursor-pointer "
                style={{
                  backgroundColor: select !== "gym" ? "#c1e5e9" : "#FFFFFF",
                }}
                onClick={() => handleclick("gym")}
              >
                <Image
                  src={"/gym-icon.svg"}
                  width={30.87}
                  height={39.5}
                  className=" absolute top-[-0.2rem] right-[-0.90rem] w-[25px] xl:w-[30px]"
                  alt="icon"
                />
              </div>
              <div
                className=" relative w-[40px] h-[40px] xl:w-[50.63px] xl:h-[50.63px] rounded-full mb-4 cursor-pointer "
                style={{
                  backgroundColor:
                    select !== "swimming" ? "#c1e5e9" : "#FFFFFF",
                }}
                onClick={() => handleclick("swimming")}
              >
                <Image
                  src={"/swiming-icon.svg"}
                  width={50.54}
                  height={19.2}
                  className=" absolute -right-6 top-[0.75rem]"
                  alt="icon"
                />
              </div>
              <div
                className=" relative w-[40px] h-[40px] xl:w-[50.63px] xl:h-[50.63px] rounded-full mb-4 cursor-pointer "
                style={{
                  backgroundColor: select !== "squash" ? "#c1e5e9" : "#FFFFFF",
                }}
                onClick={() => handleclick("squash")}
              >
                <Image
                  src={"/tennis-icon.svg"}
                  width={45.3}
                  height={38.13}
                  className=" absolute right-[-1rem] xl:right-[-1.2rem] top-[-0.2rem] w-[38px] xl:w-[45px]"
                  alt="icon"
                />
              </div>
            </div>
            <Template select={select} all_data={data} boolean={boolean} />
          </div>
        </motion.section>
      </div>

      {/* Mobile View Section */}
      <section className=" z-50 max-sm:flex hidden min-h-screen relative">
        <div className=" h-[8rem] absolute w-full top-0 z-30"></div>

        <Mob data={data[select]} setMobile={setMobile} mobile={mobile} />

        <div className="flex items-center justify-evenly py-5 bottom-0 bg-[#F2F9FF] absolute w-full">
          <div
            className=" w-[2.5rem] h-[2.5rem] rounded-full bg-white relative cursor-pointer "
            onClick={() => {
              setSelect("badminton");
              setMobile(true);
            }}
          >
            <Image
              src={"/badminton-icon.svg"}
              width={25.03}
              height={0}
              alt="svg"
              className=" absolute right-[-0.5rem]"
            />
          </div>
          <div
            className=" w-[2.5rem] h-[2.5rem] rounded-full bg-white relative cursor-pointer "
            onClick={() => {
              setSelect("gym");
              setMobile(true);
            }}
          >
            <Image
              src={"/gym-icon.svg"}
              width={22.87}
              height={0}
              alt="svg"
              className=" absolute right-[-0.5rem] bottom-[0.2rem]"
            />
          </div>
          <div
            className=" w-[2.5rem] h-[2.5rem] rounded-full bg-white relative cursor-pointer "
            onClick={() => {
              setSelect("swimming");
              setMobile(true);
            }}
          >
            <Image
              src={"/swiming-icon.svg"}
              width={35.54}
              height={0}
              alt="svg"
              className=" absolute right-[-1rem] top-[30%]"
            />
          </div>
          <div
            className=" w-[2.5rem] h-[2.5rem] rounded-full bg-white relative cursor-pointer "
            onClick={() => {
              setSelect("squash");
              setMobile(true);
            }}
          >
            <Image
              src={"/tennis-icon.svg"}
              width={30.3}
              height={0}
              alt="svg"
              className=" absolute right-[-0.8rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
