import { UserContext } from "./General_Components/Other/Context";
import users from "./UserInfo.json";
import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { memo } from "react";
function Fetcher() {
  const {
    user,
    allEvents,
    setallEvents,
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
        setUserInfo(data[user]);
        const events = data[user]?.tasks;
        setallEvents(events);
        setprevuser(user);
      });
    }
  }

  async function EventsChange() {
    if (!user) {
      return;
    }
    const newUser = { ...userInfo, tasks: allEvents };
    const newallUsers = {...allUsers};
    newallUsers[user] = newUser;
    const uri = `http://localhost:3000/users`;
    // const res = await fetch(uri, {
    //   method: "POST",
    //   body: JSON.stringify(newallUsers),
    //   headers: { "Content-Type": "application/json" },
    // });
    axios.post(uri, newallUsers).then((response) => {
      setAllUsers(newallUsers);
      setChanged(false);
      setUserInfo(response.data[user]);
      const events = response.data[user].tasks
      setallEvents(events);
    })
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
