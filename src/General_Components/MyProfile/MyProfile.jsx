import React, { useContext, useState } from "react";
import { UserContext } from "../Other/Context";
import users from "../../UserInfo.json";
import "./MyProfile.css";

function MyProfile() {
  const { user } = useContext(UserContext);
  const userData = users[user];

  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    email: userData.email,
    birthday: userData.birthday,
    username: userData.username,
    password: userData.password,
    tasks: userData.tasks, // Assign the tasks array directly
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    console.log("Edited Data:", editedData);
    setEditing(false);
  };

  // Calculate the number of tasks for the current user
  const numberOfTasks = userData.tasks.length;

  return (
    <div id="my-profile">
      <div id="my-profile-container">
        <h1 id="my-profile-header">Hello {user}</h1>
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
            <h2>Username: {userData.username}</h2>
            <h2>Email: {userData.email}</h2>
            <h2>Password: {userData.password}</h2>
            <h2>Birthday: {userData.birthday}</h2>
            <h2>Number Of Tasks: {numberOfTasks}</h2> {/* Display the number of tasks */}
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
