import React, { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Pause, Play } from "lucide-react";
import "./ImageSlider.css";

function ImageSlider({ images }) {
  // State to track the current image index
  const [imageIndex, setImageIndex] = useState(0);

  // State to manage auto-scrolling feature
  const [autoScroll, setAutoScroll] = useState(true);

  // Function to show the next image
  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  // Function to show the previous image
  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  // Effect for auto-scrolling functionality
  useEffect(() => {
    let autoTriggerInterval;

    // Set interval for auto-scrolling when enabled
    if (autoScroll) {
      autoTriggerInterval = setInterval(showNextImage, 2500);
    }

    // Cleanup the interval on component unmount or when autoScroll changes
    return () => clearInterval(autoTriggerInterval);
  }, [autoScroll]); // Include autoScroll in the dependency array

  // Function to toggle auto-scrolling feature
  function toggleAutoScroll() {
    setAutoScroll((scroll) => !scroll);
  }

  return (
    <div className="image-slider-container">
      <div
        className="img-cont"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Render images based on the current image index */}
        {images.map((url) => (
          <img
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
            key={url}
            src={url}
            className="image-slider-img"
            alt={`Image ${imageIndex + 1}`}
          />
        ))}
      </div>

      {/* Button to show the previous image */}
      <button
        onClick={showPrevImage}
        className="image-slider-button"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>

      {/* Button to toggle auto-scrolling */}
      <button onClick={toggleAutoScroll} className="image-toggle-button">
        {autoScroll ? <Pause /> : <Play />}
      </button>

      {/* Button to show the next image */}
      <button
        onClick={showNextImage}
        className="image-slider-button"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default ImageSlider;
