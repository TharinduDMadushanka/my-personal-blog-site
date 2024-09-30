import React, { useState, useEffect } from 'react';
import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';

const Hero = () => {
  // Array of paragraphs
  const paragraphs = [
    "Technology",
    "Science",
    "Travel",
    "Entertainment",
    // "Discover the amazing features we offer."
  ];

  // State to keep track of the current paragraph index
  const [currentParagraph, setCurrentParagraph] = useState(0);

  // Use useEffect to change the paragraph every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParagraph((prevParagraph) => (prevParagraph + 1) % paragraphs.length);
    }, 3000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [paragraphs.length]);

  return (
    <div className='hero'>
      <div className="hero-text">
        {/* Render the current paragraph */}
        <h1>{paragraphs[currentParagraph]}</h1>
      </div>

      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
    </div>
  );
};

export default Hero;
