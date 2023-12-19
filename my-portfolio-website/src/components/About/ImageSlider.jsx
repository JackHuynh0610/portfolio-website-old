import React, { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Pause, Play } from "lucide-react";
import "./ImageSlider.css";

function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(false);

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  useEffect(() => {
    let autoTriggerInterval;

    if (autoScroll) {
      autoTriggerInterval = setInterval(showNextImage, 2500);
    }

    return () => clearInterval(autoTriggerInterval);
  }, [autoScroll]); // Include autoScroll in the dependency array

  function toggleAutoScroll() {
    setAutoScroll((scroll) => !scroll);
  }

  return (
    <div className="image-slider-container">
      <img src={images[imageIndex]} className="image-slider-img" alt={`Image ${imageIndex + 1}`} />
      <button onClick={showPrevImage} className="image-slider-button" style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>
      <button onClick={toggleAutoScroll} className="image-toggle-button">
        {autoScroll ? <Pause /> : <Play />}
      </button>
      <button onClick={showNextImage} className="image-slider-button" style={{ right: 0 }}>
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default ImageSlider;
