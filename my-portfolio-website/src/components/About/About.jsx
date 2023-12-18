import "./About.css";
import React, { useEffect, useState } from "react";

function About() {
  // State to manage opacity
  const [opacity, setOpacity] = useState(0);
  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      // If the target element is in the viewport, set opacity to 1, else set it to 0
      setOpacity(entry.isIntersecting ? 1 : 0);
    });
  };

  useEffect(() => {
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Adjust the threshold as needed
    });

    // Observe the target element
    observer.observe(document.getElementById("about-page"));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page" id="about-page" style={{ opacity }}>
        <div className="line"></div>
      <section className="about-section">
        <h2 className="about-title">About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore ducimus quisquam cum, ut neque, adipisci harum aspernatur,
          aliquid in reprehenderit atque. Similique blanditiis aliquam, modi
          placeat tempore exercitationem quidem.
        </p>
       
      </section>
    </div>
  );
}

export default About;
