import React, { useState, useEffect } from 'react';
import "./Footer.css"
function Footer() {
  const comments = [
    'Great product! I love it!',
    'Very user-friendly and helpful.',
    'I recommend this to everyone.',
    'Outstanding customer support!',
    'An essential tool for productivity.',
    'Excellent value for the price.',
    'I cant imagine life without it!',
  ];

  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) => getRandomIndex(prevIndex, comments.length));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to get a random index while ensuring it's different from the current index
  const getRandomIndex = (currentIndex, maxIndex) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * maxIndex);
    } while (randomIndex === currentIndex);
    return randomIndex;
  };

  return (
    <>
      <h1>Our Users Recommend</h1>
      <div id='comments'>
        <p className='comment-animation'>
          {comments[currentCommentIndex]}
        </p>
      </div>
    </>
  );
}

export default Footer;
