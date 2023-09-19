import { useConText, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { UserContext } from "../General_Components/Context";

function AddTask() {
  const { allEvent, setallEvent } = useContext(UserContext);
  const { newEvent, setNewEvent } = useContext(UserContext);
  const [isCheckedEnd, setIsCheckedEnd] = useState(false);
  const [isCheckedHour, setIsCheckedHour] = useState(false);

  function handleAddEvent() {
    setallEvent([...allEvent, newEvent]);
  }
  const handleCheckboxEnd = () => {
    setIsCheckedEnd(!isCheckedEnd);
  };
  const handleCheckboxhours = () => {
    setIsCheckedHour(!isCheckedHour);
  };
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
      Need specific hours?{" "}
      <input
        name="specifichours"
        type="checkbox"
        checked={isCheckedHour}
        onChange={handleCheckboxhours}
      />
      {isCheckedHour ? (
        <>
          <div>
            <DatePicker
              placeholderText="Start date"
              selected={newEvent.start}
              onChange={(start) =>
                setNewEvent({ ...newEvent, start, end: start })
              }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          <span>More then one day?</span>{" "}
          <input
            name="moreDays"
            type="checkbox"
            checked={isCheckedEnd}
            onChange={handleCheckboxEnd}
          />
          {isCheckedEnd ? (
            <div>
              <DatePicker
                placeholderText="End date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div>
            <DatePicker
              placeholderText="Start date"
              selected={newEvent.start}
              onChange={(start) =>
                setNewEvent({ ...newEvent, start, end: start })
              }
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <span>More than one day?</span>{" "}
          <input
            name="moreDays"
            type="checkbox"
            checked={isCheckedEnd}
            onChange={handleCheckboxEnd}
          />
          {isCheckedEnd ? (
            <div>
              <DatePicker
                placeholderText="End date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy"
              />
            </div>
          ) : null}
        </>
      )}
      <button onClick={handleAddEvent}>Add Task</button>
    </>
  );
}
export default AddTask;
