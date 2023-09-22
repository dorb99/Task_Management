import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Comments.css";

import profile1 from "./CommentsImg/profile1.jpg";

const comments = [
  {
    user: "Eli Miller",
    yearsUser: "-3 Years Member!",
    comment: "Great product! I love it!",
  },
  {
    user: "Elazzar Bruker",
    yearsUser: "-1 Year Member!",
    comment: "Very user-friendly and helpful.",
  },
  {
    user: "Shlomi",
    yearsUser: "-6 Years Member!",
    comment: "I recommend this to everyone.",
  },
  {
    user: "Yehonatan Ben Ezra",
    yearsUser: "-8 Years Member!",
    comment: "Best product I have ever seen",
  },
  {
    user: "Or Reuben",
    yearsUser: "-2 Years Member!",
    comment: "An essential tool for productivity.",
  },
  {
    user: "Anna Baruch",
    yearsUser: "-9 Months Member!",
    comment: "Excellent value for the price.",
  },
  {
    user: "Johnny Beeker",
    yearsUser: "-3 Weeks Member!",
    comment: "I can't imagine life without it!",
  },
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
      ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div id="comments" className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {comments.map((commentObj, idx) => (
          <div className={`slide ${idx === index ? "active" : ""}`} key={idx}>
            <div className="comment-container">
              <div>
                <img className="profile-image" src={profile1} alt="" />
                <span className="amount-years"> {commentObj.user}&nbsp;{commentObj.yearsUser}</span>
              </div>
              {commentObj.comment}
            </div>
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
