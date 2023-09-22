import { UserContext } from "./General_Components/Other/Context";
import React, { useContext, useEffect, useState } from "react";

function Fetcher() {
  const { user, allEvent, setallEvent, userInfo, setUserInfo } =
    useContext(UserContext);

  useEffect(() => {
    async function userFetcher() {
      try {
        if (user) {
          let uri = `http://localhost:3000/${user}`;
          const res = await fetch(uri);

          if (res.ok) {
            const resolved = await res.json();
            setUserInfo(resolved);
            const events = resolved.tasks || [];
            setallEvent(events);
          } else {
            console.error("Failed to fetch user data.");
          }
        }
      } catch (error) {
        console.error("Error in userFetcher:", error);
      }
    }

    async function eventsChange() {
      try {
        if (user && allEvent.length > 0) {
          const update = { ...userInfo, tasks: allEvent };
          const uri = `http://localhost:3000/${user}`;
          const res = await fetch(uri, {
            method: "POST",
            body: JSON.stringify(update),
            headers: { "Content-Type": "application/json" },
          });

          if (res.ok) {
            const resolved = await res.json();
          } else {
            console.error("Failed to update user data.");
          }
        }
      } catch (error) {
        console.error("Error in eventsChange:", error);
      }
    }

    userFetcher();
    eventsChange();
  }, [user, allEvent, setallEvent, userInfo, setUserInfo]);

  return null;
}

export default Fetcher;
