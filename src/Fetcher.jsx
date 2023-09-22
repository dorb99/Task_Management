import { UserContext } from "./General_Components/Other/Context";
import users from "./UserInfo.json";
import React, { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
function Fetcher() {
  const [isCheckedEnd, setIsCheckedEnd] = useState(false);
  const [isCheckedHour, setIsCheckedHour] = useState(false);
  const {
    user,
    setUser,
    allEvent,
    setallEvent,
    newEvent,
    setNewEvent,
    userInfo,
    setUserInfo,
    changed,
    setChanged
  } = useContext(UserContext);
  const [prevInfo, setprevInfo] = useState();
  const [prevuser, setprevuser] = useState(0);

  function userFetcher() {
    if (user !== prevuser) {
      let uri = `http://localhost:3000/${user}`;
      const res = axios.get(uri).then(({ data }) => {
        setUserInfo(data);
        const events = data.tasks;
        setallEvent(events);
        setprevuser(user);
      });
    }
  }
  async function EventsChange() {
    const newInfo = { ...userInfo, tasks: allEvent };
    const uri = `http://localhost:3000/${user}`;
    const res = await fetch(uri, {
      method: "POST",
      body: JSON.stringify(newInfo),
      headers: { "Content-Type": "application/json" },
    });
    const resolved = await res.json();
    setChanged(false);
    setUserInfo(resolved);
    const events = resolved.tasks;
    setallEvent(events);
  }

  useEffect(() => {
    if (changed === true) {
      EventsChange();
    }
  }, [changed]);


  useEffect(() => {
    userFetcher();
  }, [user]);

  return null;
}

export default Fetcher;
