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
  const [chosedPlan, setChosedPlan] = useState(userInfo?.plan);
 let [planStyle, setPlanStyle] = useState({})
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
  // if (chosedPlan) {
  //   switch (chosedPlan) {
  //     case "plan1":
  //       setPlanStyle = { width: "10px", background: "white" };
  //       break;
  //     case "plan2":
  //       setPlanStyle = { width: "10px", background: "silver" };
  //       break;
  //     case "plan3":
  //       setPlanStyle = { width: "10px", background: "gold" };
  //       break;
  //     default:
  //       break;
  //   }
  // }
  const handleSaveChanges = () => {
    if (!isEqual(oldUserInfo, editedData)) {
      if (oldUserInfo.username !== userInfo?.username) {
        localStorage.removeItem(oldUserInfo.username);
      }
      setUserInfo(editedData);
      setChanged(true);
    }
    setEditing(false);
  };

  if (allEvents) {
    numberOfTasks = allEvents.length;
  }
  const handleDeleteComment = (index) => {
    const newcomments = userInfo.comments;
    newcomments.splice(index, 1);
    setOpenModalAllComments(false);
    setUserInfo({...userInfo, comments: newcomments})
    setChanged(true)
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
      <div id="my-profile-container" className={editing ? "active" : ""}>
        <ProfileIcon
          editing={editing}
          setEditedData={setEditedData}
          editedData={editedData}
        />
        <div>
          {editing ? (
            <>
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
              <div>
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
                type="button"
                id="my-profile-button"
                onClick={handleSaveChanges}
                className="my-profile-button"
              >
                Save Changes
              </button>
            </>
          ) : (
            <>
              {chosedPlan ? (
                <div id="chosen-plan-profile" style={planStyle}>
                  {chosedPlan}
                </div>
              ) : null} 
              <h1 id="my-profile-header">Hello, {userInfo?.username}</h1>
              <h3>{userInfo?.email}</h3>
              <div className="my-profile-input-before">
                Password: <p>{"*".repeat(userInfo?.password?.length)}</p>
              </div>
              <div className="my-profile-input-before">
                Birthday: <p>{userInfo?.birthday}</p>
              </div>
              <div className="my-profile-input-before">
                {numberOfTasks} Tasks
              </div>
              <button
                id="my-profile-button"
                onClick={() => setEditing(true)}
                className="my-profile-button"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
