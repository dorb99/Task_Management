// import React, { useState, useEffect } from "react";
// import profile1 from "./CommentsImg/Profile1.jpg";
// import "./Comments.css";
// function Footer() {
//   const comments = [
//     [
//       <div className="comment-container">
//         <span>
//           <img className="profile-image" src={profile1} alt="" />
//           Eli Miller|3 Years User|
//         </span>
//         "Great product! I love it!",
//       </div>,
//     ],
//     [
//       <div className="comment-container">
//         <span>
//           <img className="profile-image" src={profile1} alt="" />
//           Elazzar Bruker|1 Year User|
//         </span>
//         "Very user-friendly and helpful.",
//       </div>,
//     ],
//     [
//       <div className="comment-container">
//         <span>
//           <img className="profile-image" src={profile1} alt="" />
//           Shlomi|6 Years User|
//         </span>
//         "I recommend this to everyone.",
//       </div>,
//     ],
//     [
//       <div className="comment-container">
//         <span>
//           <img className="profile-image" src={profile1} alt="" />
//           Yehonatan Ben-Ezra|4 Years User|
//         </span>
//       </div>,
//       "Outstanding customer support!",
//     ],
//     [
//       <div className="comment-container">
//         <span>
//           <img className="profile-image" src={profile1} alt="" />
//           Or Reuben|2 Years User|
//         </span>
//       </div>,
//       "An essential tool for productivity.",
//     ],
//     [
//       <div className="comment-container">
//         <span>
//           <img className="profile-image" src={profile1} alt="" />
//           Anna Baruch|9 Months User|
//         </span>
//       </div>,
//       "Excellent value for the price.",
//     ],
//     [
//       <div className="comment-container">
//         <span>
//           <img className="profile-image" src={profile1} alt="" />
//           Eli Miller|3 Years User|
//         </span>
//       </div>,
//       "I cant imagine life without it!",
//     ],
//   ];

//   const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentCommentIndex((prevIndex) =>
  //       getRandomIndex(prevIndex, comments.length)
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);
  // const getRandomIndex = (currentIndex, maxIndex) => {
  //   let randomIndex;
  //   do {
  //     randomIndex = Math.floor(Math.random() * maxIndex);
  //   } while (randomIndex === currentIndex);
  //   return randomIndex;
  // };

//   return (
//     <>
//       <div id="reco-container">
//         <h1 id="heading">Our Users Recommend</h1>
//         <div id="comments">
//           {comments.map((comment) => (
//             <p className="comment-animation">{comment}</p>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;













import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Comments.css"; // Make sure to have your CSS file imported here

// Import the profile image
import profile1 from "./CommentsImg/profile1.jpg"; // Replace with the correct path

const comments = [
  [
    <div className="comment-container">
      <span>
        <img className="profile-image" src={profile1} alt="" />
        Eli Miller|3 Years User|
      </span>
      "Great product! I love it!"
    </div>,
  ],
  [
    <div className="comment-container">
      <span>
        <img className="profile-image" src={profile1} alt="" />
        Elazzar Bruker|1 Year User|
      </span>
      "Very user-friendly and helpful."
    </div>,
  ],
  [
    <div className="comment-container">
      <span>
        <img className="profile-image" src={profile1} alt="" />
        Shlomi|6 Years User|
      </span>
      "I recommend this to everyone."
    </div>,
  ],
  [
    <div className="comment-container">
      <span>
        <img className="profile-image" src={profile1} alt="" />
        Yehonatan Ben-Ezra|4 Years User|
      </span>
      "Outstanding customer support!"
    </div>,
  ],
  [
    <div className="comment-container">
      <span>
        <img className="profile-image" src={profile1} alt="" />
        Or Reuben|2 Years User|
      </span>
      "An essential tool for productivity."
    </div>,
  ],
  [
    <div className="comment-container">
      <span>
        <img className="profile-image" src={profile1} alt="" />
        Anna Baruch|9 Months User|
      </span>
      "Excellent value for the price."
    </div>,
  ],
  [
    <div className="comment-container">
      <span>
        <img className="profile-image" src={profile1} alt="" />
        Eli Miller|3 Years User|
      </span>
      "I can't imagine life without it!"
    </div>,
  ],
];

const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) =>
        prevIndex === comments.length - 1 ? 0 : prevIndex + 1
      ), delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div id="comments" className="slideshow"> {/* Add the id and class name */}
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {comments.map((commentArray, idx) => (
          <div className={`slide ${idx === index ? "active" : ""}`} key={idx}>
            {commentArray}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {comments.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
