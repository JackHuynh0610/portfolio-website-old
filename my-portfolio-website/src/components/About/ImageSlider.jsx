import React, { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./ImageSlider.css";

function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  useEffect(() => {
    // Set an interval to call showNextImage every 6 seconds (6000 milliseconds)
    const autoTriggerInterval = setInterval(showNextImage, 6000);
    return () => clearInterval(autoTriggerInterval);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  useEffect(() => {

  })

  return (
    <div className="image-slider-container">
      <img src={images[imageIndex]} className="image-slider-img" alt={`Image ${imageIndex + 1}`} />
      <button onClick={showPrevImage} className="image-slider-button" style={{ left: 0 }}>
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className="image-slider-button" style={{ right: 0 }}>
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default ImageSlider;
