import React from "react";
import ImageSlider from "./ImageSlider";

const Gallery = () => {
  return (
    <div className="content">
      <div className="col">
        <h1 className="text-center header tracking-in-expand-fwd-top">
          Carlisle Overhead Doors and Services
        </h1>
      </div>
      <ImageSlider />
    </div>
  );
};

export default Gallery;
