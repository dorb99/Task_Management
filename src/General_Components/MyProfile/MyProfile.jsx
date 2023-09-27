import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Other/Context";
import "./MyProfile.css";
import ProfileIcon from "./ProfileIcon";
import { Modal } from "react-overlays";
import ReactStars from "react-rating-stars-component";

function MyProfile() {
  const { userInfo, allEvents, setUserInfo, setChanged } =
    useContext(UserContext);
  const [openModalAllComments, setOpenModalAllComments] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    userInfo,
  });
  const renderBackdrop = (props) => (
    <div className="backdrop_adder" {...props} />
  );
  const oldUserInfo = { ...userInfo };
  let numberOfTasks = 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    if (!isEqual(oldUserInfo, editedData)) {
      if (oldUserInfo.username !== userInfo?.username) {
        localStorage.removeItem(oldUserInfo.username);
      }
      setUserInfo(editedData);
      setEditing(false);
      setChanged(true);
    } else {
      setEditing(false);
    }
  };

  if (allEvents) {
    numberOfTasks = allEvents.length;
  }
  const handleDeleteComment = (index) => {
    const newcomments = userInfo.comments;
    newcomments.splice(index, 1);
    setOpenModalAllComments(false);
    setUserInfo({ ...userInfo, comments: newcomments });
    setChanged(true);
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (!userInfo?.username && savedUsername) {
      const savedUserData = JSON.parse(savedUsername);
      setUserInfo({ ...editedData, username: savedUserData });
    }
  }, [userInfo, setUserInfo]);

  const isEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    if (userInfo) {
      setEditedData(userInfo);
    }
  }, [userInfo]);

  return (
    <div id="my-profile">
      <div id="my-profile-container">
        <h1 id="my-profile-header">Hello {userInfo?.username}</h1>
        <ProfileIcon
          editing={editing}
          setEditedData={setEditedData}
          editedData={editedData}
        />
        {editing ? (
          <>
            <div>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  value={editedData.username}
                  onChange={handleInputChange}
                  className="my-profile-input"
                />
              </div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editedData.email}
                onChange={handleInputChange}
                className="my-profile-input"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={editedData.password}
                onChange={handleInputChange}
                className="my-profile-input"
              />
            </div>
            <div>
              <label>Birthday:</label>
              <input
                type="date"
                name="birthday"
                value={editedData.birthday}
                onChange={handleInputChange}
                className="my-profile-input"
              />
            </div>
            <button
              type="submit"
              id="my-profile-button"
              onClick={handleSaveChanges}
              className="my-profile-button"
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <h2>Username: {userInfo?.username}</h2>
            <h2>Email: {userInfo?.email}</h2>
            <h2>Password: {"*".repeat(userInfo?.password?.length)}</h2>
            <h2>Birthday: {userInfo?.birthday}</h2>
            <h2>Number Of Tasks: {numberOfTasks}</h2>
            <button
              id="my-profile-button"
              onClick={() => setEditing(true)}
              className="my-profile-button"
            >
              Edit Profile
            </button>
            <button onClick={() => setOpenModalAllComments(true)}>
              My Comments
            </button>
          </>
        )}
        <Modal
          className="modal_Adder event_Modal"
          show={openModalAllComments}
          onHide={() => setOpenModalAllComments(false)}
          renderBackdrop={renderBackdrop}
        >
          <>
            {userInfo && userInfo.comments ? (
              userInfo.comments.length > 0 ? (
                userInfo.comments.map((comment, index) => (
                  <div key={index} id="allComments">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        name={`stars-${index}`}
                        value={comment?.stars}
                        edit={false}
                      />
                    </div>
                    <p>Comment: {comment?.textComment}</p>
                    <button onClick={() => handleDeleteComment(index)}>
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <div>no comments yet!</div>
              )
            ) : null}
          </>
        </Modal>
      </div>
    </div>
  );
}

export default MyProfile;
