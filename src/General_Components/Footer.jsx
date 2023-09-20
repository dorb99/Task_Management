import React, { useState, useEffect } from "react";
import profile1 from "./img/profile1.jpg";
function Footer() {
  const comments = [
    [
      <div className="comment-container">
        <span>
          <img className="profile-image" src={profile1} alt="" />
          Eli Miller|3 Years User|
        </span>
      </div>,
      "Great product! I love it!",
    ],
    [
      <div className="comment-container">
        <span>
          <img className="profile-image" src={profile1} alt="" />
          Elazzar Bruker|1 Year User|
        </span>
      </div>,
      "Very user-friendly and helpful.",
    ],
    [
      <div className="comment-container">
        <span>
          <img className="profile-image" src={profile1} alt="" />
          Shlomi|6 Years User|
        </span>
      </div>,
      "I recommend this to everyone.",
    ],
    [
      <div className="comment-container">
        <span>
          <img className="profile-image" src={profile1} alt="" />
          Yehonatan Ben-Ezra|4 Years User|
        </span>
      </div>,
      "Outstanding customer support!",
    ],
    [
      <div className="comment-container">
        <span>
          <img className="profile-image" src={profile1} alt="" />
          Or Reuben|2 Years User|
        </span>
      </div>,
      "An essential tool for productivity.",
    ],
    [
      <div className="comment-container">
        <span>
          <img className="profile-image" src={profile1} alt="" />
          Anna Baruch|9 Months User|
        </span>
      </div>,
      "Excellent value for the price.",
    ],
    [
      <div className="comment-container">
        <span>
          <img className="profile-image" src={profile1} alt="" />
          Eli Miller|3 Years User|
        </span>
      </div>,
      "I cant imagine life without it!",
    ],
  ];

  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommentIndex((prevIndex) =>
        getRandomIndex(prevIndex, comments.length)
      );
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
      <div id="reco-container">
        <h1 id="heading">Our Users Recommend</h1>
        <div id="comments">
          <p className="comment-animation">{comments[currentCommentIndex]}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
