"use client";

import React, { useRef, useState } from "react";
import "./Test.css";
import Image from "next/image";

const Test = ({ zoomScale = 2 }) => {
  const imgContRef = useRef(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoom, setIsZoom] = useState(false);

  const handlePosition = (e) => {
    const { top, left, width, height } = imgContRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => setIsZoom(true);
  const handleMouseLeave = () => setIsZoom(false);

  return (
    <div
      ref={imgContRef}
      className="imgContainer"
      onMouseMove={handlePosition}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`main-img ${isZoom ? "zoomed" : ""}`}>
        <Image src="/img2.webp" alt="" fill />
      </div>

      {isZoom && (
        <div
          className="overly-img"
          style={{
            backgroundImage: `url(/img1.webp)`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            backgroundSize: `${zoomScale * 100}%`,
          }}
        />
      )}
    </div>
  );
};

export default Test;
