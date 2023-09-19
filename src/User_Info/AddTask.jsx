import { useState } from "react";
import DatePicker from "react-datepicker";

function AddTask() {
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
    const [allEvent, setallEvent] = useState(events);
    const [newEvent, setNewEvent] = useState({
        title: "",
        start: "",
        end: "",
      });
        function handleAddEvent() {
        setallEvent([...allEvent, newEvent]);
        console.log(allEvent);
      }

  return (
    <>
      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          value={newEvent.title}
          onChange={(e) => setnewEvent({ ...newEvent, title: e.target.value })}
        />
      </div>
      <DatePicker
        placeholdertext="Start date"
        selected={newEvent.start}
        onChange={(start) => setnewEvent({ ...newEvent, start })}
      />
      <DatePicker
        placeholdertext="End date"
        selected={newEvent.end}
        onChange={(end) => setnewEvent({ ...newEvent, end })}
      />
      <button onClick={handleAddEvent}>Submit</button>
    </>
  );
}
export default AddTask;
