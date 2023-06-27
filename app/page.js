import Image from "next/image";
import {BsCaretRight} from 'react-icons/bs'

export default function Home() {
  return (
    <main>
      <section className="flex flex-col min-h-screen w-4/5 m-auto justify-center">
        <div className=" absolute top-0 flex justify-between w-[inherit] items-center h-32">
          <h1 className=" text-6xl font-bold text-red-500">HISC</h1>
          <nav className=" flex items-center h-fit gap-6">
            <a href="/#" className=" text-black font-medium">
              Home
            </a>
            <a href="/#" className=" text-black font-medium">
              About us
            </a>
            <a href="/#" className=" text-black font-medium">
              Facility
            </a>
            <a
              href="/#"
              className=" p-2 px-6 text-xs border-0 bg-red-500 rounded-full font-medium"
            >
              Sign up
            </a>
          </nav>
        </div>
        <div className=" flex flex-col h-full w-1/3 space-y-4 justify-self-center ">
          <p className=" text-sm border-0 p-2 px-4 rounded-full bg-red-500 w-fit">
            START YOUR HEALTY LIFESTYLE!
          </p>
          <h1 className=" font-dosis text-6xl tracking-tighter text-black font-semibold">
            BEGIN YOUR <br />
            TRANSFORMATION <br />
            TODAY
          </h1>
          <p className=" text-black">
            Heartfulness International Sports Center <br />
            HISC empowers children and youth to unlock <br />
            their heart's potential through sports, fostering <br />
            holistic well-being and personal growth.
          </p>
          <button className=" flex justify-center items-center text-xs rounded-full border border-gray-700 p-3 pl-6 pr-2 font-medium text-gray-600 w-fit">
            SHOW MORE <BsCaretRight className=" text-base ml-6" />
          </button>
        </div>
      </section>
      {/* <div className=" absolute  bottom-16 right-5 text-lg p-4 bg-gray-900 rounded-full">
        <IoTriangleSharp className="" />
      </div> */}
    </main>
  );
}
