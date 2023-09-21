import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../General_Components/Other/Context";


export default function PrintCalendar() {
  const { allEvent, setallEvent, user } = useContext(UserContext);
  const localizer = momentLocalizer(moment);
  
  const handleDoubleClick = (event) => {
    console.log(event.title+ " two click");
  };
  const handleOneClick = (event) => {
    console.log(event.title+ " one clicks");
  };

  function ShowingEvening() {
    const newEvent = [];
    for (let index = 0; index < allEvent.length; index++) {
      const title = allEvent[index].title;
      const start = new Date(allEvent[index].start);
      const end = new Date(allEvent[index].end);
      newEvent.push({ title: title, start: start, end: end });
    }
    setallEvent(newEvent)
  }

  useEffect(() => {
    if (user) {
      ShowingEvening();
    }
  }, [user]);

  {
    return (
      <>
        <div>
          <Calendar
            localizer={localizer}
            events={allEvent}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
            onSelectEvent={handleOneClick}
            onDoubleClickEvent={handleDoubleClick}
          />
        </div>
      </>
    );
  }
}
