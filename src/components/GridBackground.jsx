import React from "react";

const GridBackground = () => {
  const gridItems = document.querySelectorAll(".grid-background > div");
  gridItems.forEach((item) => {
    const delay = getRandomInt(0.5);
    const duration = getRandomInt(5, 6);
    item.style.animationDelay = `${delay}s`;
    item.style.animationDuration = `${duration}s`;
  });
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className=" grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150 h-full">
      {/* row */}
      <div className="col-span-1 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-5 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-5 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-1 bg-violet-950 rounded animate-pulse"></div>

      {/* row */}
      <div className="col-span-2 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-3 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-3 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-4 bg-violet-950 rounded animate-pulse"></div>

      {/* row */}
      <div className="col-span-1 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-9 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-2 bg-violet-950 rounded animate-pulse"></div>

      {/* row */}
      <div className="col-span-5 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-1 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-5 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-1 bg-violet-950 rounded animate-pulse"></div>

      {/* row */}
      <div className="col-span-2 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-5 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-1 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-4 bg-violet-950 rounded animate-pulse"></div>

      {/* row */}
      <div className="col-span-3 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-7 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-2 bg-violet-950 rounded animate-pulse"></div>

      {/* row */}
      <div className="col-span-3 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-7 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-2 bg-violet-950 rounded animate-pulse"></div>

      {/* row */}
      <div className="col-span-2 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-5 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-1 bg-violet-950 rounded animate-pulse"></div>
      <div className="col-span-4 bg-violet-950 rounded animate-pulse"></div>
    </div>
  );
};

export default GridBackground;
