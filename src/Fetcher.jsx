import { UserContext } from "./General_Components/Other/Context";
import users from "./UserInfo.json";
import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { memo } from "react";
function Fetcher() {
  const {
    user,
    allEvents,
    setAllEvents,
    userInfo,
    setUserInfo,
    changed,
    setChanged,
  } = useContext(UserContext);
  const [prevuser, setprevuser] = useState(0);
  const [allUsers, setAllUsers] = useState(0);
  
  function userFetcher() {
    if (user !== prevuser) {
      let uri = `http://localhost:3000/users`;
      axios.get(uri).then(({ data }) => {
        setAllUsers(data);
        if (data[user]) {
          setUserInfo(data[user]);
          const events = data[user].tasks || []; // ✅ Ensure events exist
          setAllEvents(events); // ✅ Correct function call
          setprevuser(user);
        }
      }).catch(error => console.error("Error fetching user:", error));
    }
  }
  
  async function EventsChange() {
    if (!user) return;
  
    const newUser = { ...userInfo, tasks: allEvents };
    const uri = `http://localhost:3000/users/${user}`; // JSON Server now supports this
  
    axios.put(uri, newUser) // ✅ Use PUT to update the specific user
      .then((response) => {
        setChanged(false);
        setUserInfo(response.data);
        setAllEvents(response.data.tasks || []);
      })
      .catch(error => console.error("Error updating user:", error));
  }
  
  

  useEffect(() => {
    if (changed === true) {
      EventsChange();
    }
  }, [changed]);

  useEffect(() => {
    user ? userFetcher() : null;
  }, [user]);

  return null;
}

export default memo(Fetcher);
