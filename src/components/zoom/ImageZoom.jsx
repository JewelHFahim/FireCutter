"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import "./ImageZoom.css";

const ImageZoom = ({ src, zoomScale = 2 }) => {
  const imgContRef = useRef(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setiIsZoomed] = useState(false);

  const handleMoveMouse = (e) => {
    const { top, left, width, height } =
      imgContRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 70;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => setiIsZoomed(true);
  const handleMouseLeave = () => setiIsZoomed(false);

  return (
    <div
      ref={imgContRef}
      onMouseMove={handleMoveMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="imgContainer relative overflow-hidden w-full h-[55vh] sm:h-[80vh]"
    >
      <div className={`mainImg  ${isZoomed ? "zoomed" : ""}`}>
        <Image src={src} alt="img" fill />
      </div>

      {isZoomed && (
        <div
          className="zoomOverly"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            backgroundSize: `${zoomScale * 100}%`,
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;
