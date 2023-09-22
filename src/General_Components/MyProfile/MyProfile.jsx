import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../Other/Context";
import "./MyProfile.css";

function MyProfile() {
  const { userInfo, allEvents, setUserInfo } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    email: userInfo?.email,
    birthday: userInfo?.birthday,
    username: userInfo?.username,
    password: userInfo?.password,
    tasks: userInfo?.tasks,
  });
  let numberOfTasks = 0;

  console.log(userInfo);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (!userInfo?.username && savedUsername) {
      const savedUserData = JSON.parse(savedUsername);
      setUserInfo({ ...editedData, username: savedUserData });
    }
  }, [userInfo, setUserInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    setUserInfo(editedData);
    setEditing(false);
  };

  if (allEvents) {
    numberOfTasks = allEvents.length;
  }

  return (
    <div id="my-profile">
      <div id="my-profile-container">
        <h1 id="my-profile-header">Hello {userInfo?.username}</h1>
        {editing ? (
          <form>
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
              id="my-profile-button"
              onClick={handleSaveChanges}
              className="my-profile-button"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <>
            <h2>Username: {userInfo?.username}</h2>
            <h2>Email: {userInfo?.email}</h2>
            <h2>Password: {userInfo?.password}</h2>
            <h2>Birthday: {userInfo?.birthday}</h2>
            <h2>Number Of Tasks: {numberOfTasks}</h2>{" "}
            {/* Display the number of tasks */}
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
  );
}

export default MyProfile;
