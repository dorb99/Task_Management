import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import react, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css"


export default function App() {
  const events = [
    {
      title: "Big Meeting",
      start: new Date(2023, 8, 23),
      end: new Date(2023, 8, 23),
    },
    {
      title: "Lunch",
      start: new Date(2023, 8, 20),
      end: new Date(2023, 8, 20),
    },
    {
      title: "Movie Night",
      start: new Date(2023, 8, 13),
      end: new Date(2023, 8, 13),
    },
  ];
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvent, setallEvent] = useState(events);
  function handleAddEvent() {
    setallEvent([...allEvent, newEvent]);
    console.log(allEvent);
  }

  const localizer = momentLocalizer(moment);
  return (
    <>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
      </div>
      <DatePicker
        placeholdertext="Start date"
        selected={newEvent.start}
        onChange={(start) => setNewEvent({ ...newEvent, start })}
      />
      <DatePicker
        placeholdertext="End date"
        selected={newEvent.end}
        onChange={(end) => setNewEvent({ ...newEvent, end })}
      />
      <button onClick={handleAddEvent}>Submit</button>
      <div>
        <Calendar
          localizer={localizer}
          events={allEvent}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </>
  );
}
