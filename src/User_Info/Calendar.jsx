import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../General_Components/Other/Context";
import { Modal } from "react-overlays";
import ColorsBar from "./ColorsBar";

export default function PrintCalendar({ openModal, setEditer }) {
  const { allEvents, setNewEvent } = useContext(UserContext);
  const [calendarEvents, setCalendarEvents] = useState();
  const localizer = momentLocalizer(moment);


  const handleOneClick = (event) => {
    setNewEvent(event);
    openModal();
    setEditer(true);
  };
  useEffect(() => {
    if (allEvents) {
      if (allEvents.length > 1) {
        const eventsCollector = allEvents.map((event) => {
          const { title, start, end, color, id } = event;
          const formattedStart = new Date(start);
          const formattedEnd = new Date(end);
          return {
            title,
            start: formattedStart,
            end: formattedEnd,
            color: color,
            id: id,
          };
        });
        setCalendarEvents(eventsCollector);
      } else {
        setCalendarEvents(allEvents);
      }
    }
  }, [allEvents]);

  return (
    <>
      <div id="table_info">
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px", width: 600 }}
          onSelectEvent={handleOneClick}
          eventPropGetter={(calendarEvents) => {
            const backgroundColor = calendarEvents.color
              ? calendarEvents.color
              : "white";
            return { style: { backgroundColor } };
          }}
          className="your-calendar-class"
        />
        <ColorsBar />
      </div>
    </>
  );
}
