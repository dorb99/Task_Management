import { UserContext } from "./General_Components/Context";
import users from "./UserInfo.json";
import React, { useContext, useEffect, useMemo, useState } from "react";

function Fetcher() {
  const {
    user,
    setUser,
    allEvent,
    setallEvent,
    newEvent,
    setNewEvent,
    userInfo,
    setUserInfo,
  } = useContext(UserContext);
  const [prevevents, setprevevents] = useState([]);
  const [prevuser, setprevuser] = useState();

  async function userFetcher() {
    if (user !== prevuser) {
      let uri = `http://localhost:3000/${user}`;
      const res = await fetch(uri);
      const resulved = await res.json();
      setUserInfo(resulved);
      const events = resulved.tasks;
      setallEvent(events);
      setprevuser(user);
      setprevevents(allEvent);
    }
  }
  
  async function EventsChange() {
    console.log("rendered");
    if (allEvent.length > prevevents.length) {
    const update = { ...userInfo, tasks: allEvent };
    const uri = `http://localhost:3000/${user}`;
    const res = await fetch(uri, {
      method: "POST",
      body: JSON.stringify(update),
      headers: { "Content-Type": "application/json" },
    });
    const resulved = await res.json();
    setprevevents(allEvent);
    }
  }

  useMemo(() => EventsChange(), [allEvent.length]);
  useMemo(() => userFetcher(), [user]);

  return null;
}
export default Fetcher;
