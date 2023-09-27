import { Modal } from "react-overlays";
import ratebubble from "../img/rateus.png";
import { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { UserContext } from "../Other/Context";

function RateUs() {
  const renderBackdrop = (props) => (
    <div className="backdrop_adder" {...props} />
  );
  const { userInfo, setUserInfo, setChanged } = useContext(UserContext);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [newComment, setNewComment] = useState({ textComment: "", stars: 0 });
  const [allComments, setAllComments] = useState(userInfo?.comments);

  const ratingChanged = (newRating) => {
    setNewComment({ ...newComment, stars: newRating });
  };

  const closeModal = () => {
    setOpenModalAdd(false);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (newComment.stars !== 0 && newComment.textComment !== "") {
      let newallcomments = [];
      if (allComments?.length > 0) newallcomments = [...allComments];
      newallcomments.push({
        textComment: newComment.textComment,
        stars: newComment.stars,
      });
      setAllComments(newallcomments);
      setOpenModalAdd(false);
      const newuserinfo = userInfo;
      newuserinfo.comments = newallcomments;
      setUserInfo(newuserinfo);
      setChanged(true);
    }
  };
  const handleTextCommentChange = (e) => {
    setNewComment({ ...newComment, textComment: e.target.value });
  };

  useEffect(() => {
    if (userInfo?.comments) {
      setAllComments(userInfo.comments);
    }
  }, [userInfo?.comments]);

  return (
    <>
   <div className="image-container">
      <img
        id="rate-us-image"
        src={ratebubble}
        width="120px"
        alt="rate us!"
        onClick={() => setOpenModalAdd(true)}
      />
    </div>
      <Modal
        className=" event_Modal "
        show={openModalAdd}
        onHide={closeModal}
        renderBackdrop={renderBackdrop}
      >
        <form onSubmit={handleSubmitForm} className="rate_Modal">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            name="stars"
          />
          <input
            name="textComment"
            type="text"
            style={{ width: "auto " }}
            placeholder="please add your comment"
            onChange={handleTextCommentChange}
          />
        </form>
      </Modal>
    </>
  );
}
export default RateUs;
