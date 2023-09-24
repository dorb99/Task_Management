import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./Comments.css";

import profile1 from "./CommentsImg/profileimage1.png";
import profile2 from "./CommentsImg/profileimage2.jpg";
import profile3 from "./CommentsImg/profileimage3.png";
import profile4 from "./CommentsImg/profileimage4.png";
import profile5 from "./CommentsImg/profileimage5.png";
import profile6 from "./CommentsImg/profileimage6.jpg";
import profile7 from "./CommentsImg/profileimage7.jpg";
const comments = [
  {
    user: "Eli Miller",
    yearsUser: "-3 Years Member!",
    comment: "Great product! I love it!",
    img: <img className="profile-image" src={profile6} alt="" />,
  },
  {
    user: "Yehonatan Ben Ezra",
    yearsUser: "-8 Years Member!",
    comment: "Best product I have ever seen",
    img: <img className="profile-image" src={profile7} alt="" />,
  },
  {
    user: "Shlomi",
    yearsUser: "-6 Years Member!",
    comment: "I recommend this to everyone.",
    img: <img className="profile-image" src={profile3} alt="" />,
  },
  {
    user: "Elazzar Bruker",
    yearsUser: "-1 Year Member!",
    comment: "Very user-friendly and helpful.",
    img: <img className="profile-image" src={profile2} alt="" />,
  },
  {
    user: "Or Reuben",
    yearsUser: "-2 Years Member!",
    comment: "An essential tool for productivity.",
    img: <img className="profile-image" src={profile4} alt="" />,
  },
  {
    user: "Anna Baruch",
    yearsUser: "-9 Months Member!",
    comment: "Excellent value for the price.",
    img: <img className="profile-image" src={profile5} alt="" />,
  },
  {
    user: "Johnny Beeker",
    yearsUser: "-3 Weeks Member!",
    comment: "I can't imagine life without it!",
    img: <img className="profile-image" src={profile1} alt="" />,
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
    timeoutRef.current = setTimeout(
      () =>
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
              <div>{commentObj.img}
                <span className="amount-years">
                  {" "}
                  {commentObj.user}&nbsp;{commentObj.yearsUser}
                </span>
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
