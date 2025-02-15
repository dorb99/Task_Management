import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  // Define all the state variables
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [allEvents, setAllEvents] = useState([]);
  const [changed, setChanged] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  // Provide the state variables and their setters to the context
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userInfo,
        setUserInfo,
        allEvents,
        setAllEvents,
        changed,
        setChanged,
        newEvent,
        setNewEvent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
