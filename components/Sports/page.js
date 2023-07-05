"use client";

import React, { useState } from "react";
import Image from "next/image";
import Template from "./Template";

function Page() {
  const [select, setSelect] = useState("badminton");

  const data = {
    badminton: {
      color: "#009990",
      h1: "EMPOWERING BADMINTON EXCELLENCE",
      p: `With 40 full-time students residing and training in Kanha, they will receive top-notch coaching from the Pullela Gopichand Badminton Academy. Our international-quality facility boasts 14 courts, a 100-person viewing gallery, and the capacity to host tournaments at all levels. Join us as we nurture the talent of aspiring badminton players.`,
      img1: "/badminton-img1.jpg",
      img2: "/badminton-img2.jpg",
      img3: "/badminton-img3.jpg",
      svg1: "/badminton-small.svg",
      svg1_width: 70.06,
      svg1_pos: "right-[-2rem] top-[-0.4rem]",
      h2: "BADMINTON",
      svg2: "/shuttel.svg",
    },
    gym: {
      color: "#474747",
      h1: "FITNESS OASIS AWAITS",
      p: `We have a fully equipped gym where you can begin or continue your fitness journey. There are numerous benefits to joining a gym and incorporating regular exercise into your routine. Overall, the benefits of joining a gym go beyond physical health and can positively impact mental and emotional wellbeing as well`,
      img1: "/gym-img1.jpg",
      img2: "/gym-img2.jpg",
      img3: "/gym-img3.jpg",
      svg1: "/gym-small.svg",
      svg1_width: 70.06,
      svg1_pos: "right-[-2rem] top-[-0.4rem]",
      h2: "GYM",
      svg2: "/dumbell.svg",
    },
    swimming: {
      color: "#0479CE",
      h1: "SPLASH INTO WELLNESS",
      p: `Dive into the world of swimming, a beloved water-based activity that offers a full-body workout through arm and leg movements. Whether for leisure or competition, swimming engages muscles throughout the body, providing a low-impact exercise option. Our facility boasts a semi-heated indoor swimming pool with 25 meters and 5 lanes, perfect for leisurely swims or learn-to-swim programs. Additionally, it serves as an excellent venue for athlete warm-ups, cool-downs, and rehabilitation exercises. Jump in and make a splash!`,
      img1: "/swim-img1.jpg",
      img2: "/swim-img2.jpg",
      img3: "/swim-img3.jpg",
      svg1: "/swim-small.svg",
      svg1_width: 100.06,
      svg1_pos: "right-[-2.5rem] top-[2rem]",
      h2: "SWIMMING",
      svg2: "/poolh.svg",
    },
    squash: {
      color: "#FB491D",
      h1: "MASTER THE SQUASH",
      p: `Squash is a popular racquet sport that is played by two or four players in a four-walled court with a small, hollow rubber ball. The objective of the game is to hit the ball against the front wall, making it difficult for the opponent to return the ball. Three international-standard wooden courts Capable of hosting state and national tournaments A viewing gallery with seating for 50 persons`,
      img1: "/squash-img1.jpg",
      img2: "/squash-img2.jpg",
      img3: "/squash-img3.jpg",
      svg1: "/squash-small.svg",
      svg1_width: 100.06,
      svg1_pos: "right-[-2rem] top-[-0.4rem]",
      h2: "SQUASH",
      svg2: "/squash-mini.svg",
    },
  };

  return (
    <section
      className=" relative min-h-screen w-full"
      style={{ background: data[select].color }}
    >
      <div className=" absolute top-[38%]">
        <div
          className=" relative bg-white w-[50.63px] h-[50.63px] rounded-full mb-4 ml-12 cursor-pointer"
          onClick={() => setSelect("badminton")}
        >
          <Image
            src={"/badminton-icon.svg"}
            width={35.03}
            height={39.65}
            className=" absolute right-[-0.90rem] top-[-0.3rem] "
            alt="icon"
          />
        </div>
        <div
          className=" relative bg-white w-[50.63px] h-[50.63px] rounded-full mb-4 ml-12 cursor-pointer"
          onClick={() => setSelect("gym")}
        >
          <Image
            src={"/gym-icon.svg"}
            width={30.87}
            height={39.5}
            className=" absolute top-[-0.2rem] right-[-0.90rem]"
            alt="icon"
          />
        </div>
        <div
          className=" relative bg-white w-[50.63px] h-[50.63px] rounded-full mb-4 ml-12 cursor-pointer"
          onClick={() => setSelect("swimming")}
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
          className=" relative bg-white w-[50.63px] h-[50.63px] rounded-full mb-4 ml-12 cursor-pointer"
          onClick={() => setSelect("squash")}
        >
          <Image
            src={"/tennis-icon.svg"}
            width={45.3}
            height={38.13}
            className=" absolute right-[-1.2rem] top-[-0.2rem]"
            alt="icon"
          />
        </div>
      </div>
      <Template data={data[select]} />
    </section>
  );
}

export default Page;
