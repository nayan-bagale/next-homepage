"use client"
import React, { useRef, useEffect, useState } from "react";

const ScrollHeight = () => {
  const scrollContainerRef = useRef(null);
  const [totalHeight, setTotalHeight] = useState(0);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollHeight } = scrollContainerRef.current;
      setTotalHeight(scrollHeight);
    }
  }, []);

  return (
    <div ref={scrollContainerRef} style={{ overflow: "auto", height: "200px" }} className=" text-black">
      <div style={{ height: "300vh" }}>
        <p>Total Height: {totalHeight}</p>
      </div>
    </div>
  );
};

export default ScrollHeight;
