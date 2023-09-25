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

  function userFetcher() {
    if (user !== prevuser) {
      let uri = `http://localhost:3000/${user}`;
      const res = axios.get(uri).then(({ data }) => {
        setUserInfo(data);
        const events = data.tasks;
        setallEvents(events);
        setprevuser(user);
      });
    }
  }

  async function EventsChange() {
    if (user === "o" || user === "d") {
      const newInfo = { ...userInfo, tasks: allEvents };
      const uri = `http://localhost:3000/${user}`;
      const res = await fetch(uri, {
        method: "PUT",
        body: JSON.stringify(newInfo),
        headers: { "Content-Type": "application/json" },
      });
      const resolved = await res.json();
      setChanged(false);
      setUserInfo(resolved);
      const events = resolved.tasks;
      setallEvents(events);
    }
    else{
      const newInfo = { ...userInfo, tasks: allEvents }
      setChanged(false);
      setUserInfo(newInfo);
      const events = newInfo.tasks;
      setallEvents(events);
      localStorage.setItem(newInfo.username, JSON.stringify(newInfo));
    }
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
