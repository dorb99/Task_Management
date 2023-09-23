import { useContext, useEffect, useState } from "react";
import { Modal } from "react-overlays";
import { UserContext } from "../General_Components/Other/Context";
import DatePicker from "react-datepicker";

export default function event_Modal({ isOpen, onClose, editer, setEditer }) {
  const renderBackdrop = (props) => (
    <div className="backdrop_adder" {...props} />
  );
  const { newEvent, setNewEvent, allEvents, setallEvents, setChanged } =
    useContext(UserContext);
  const [isCheckedEnd, setIsCheckedEnd] = useState(false);
  const [isCheckedHour, setIsCheckedHour] = useState(false);
  
  function handleDelete() {
    const title = newEvent.title;
    const editedEvents = allEvents;
    const index = editedEvents.findIndex((obj) => obj.title === title);
    if (index > -1) {
      editedEvents.splice(index, 1);
      setallEvents(editedEvents);
    }
    setChanged(true);
    onClose();
  }
  function handleAddEvent() {
    allEvents.length > 1 ?
    setallEvents([...allEvents, newEvent])
    : setallEvents([allEvents, newEvent])
    setChanged(true);
    onClose();
  }
  function handleEditEvent() {
    const newList = allEvents.map((task) =>
      task.id === newEvent.id ? newEvent : task
    );
    setallEvents(newList);
    setChanged(true);
    setEditer(false);
    onClose();
  }

  return (
    <Modal
      className="modal_Adder event_Modal"
      show={isOpen}
      onHide={onClose}
      renderBackdrop={renderBackdrop}
    >
      <div id="modal-con">
        <h2 className="modal-title">Event Form</h2>
        <div>
          <input
          className="event-modal-text"
            type="text"
            placeholder="Add Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <br />
          <select
          id="event-color"
            style={{ backgroundColor: newEvent.color }}
            value={newEvent.color}
            onChange={(e) =>
              setNewEvent({ ...newEvent, color: e.target.value })
            }
          > 
            <option value="white" style={{ backgroundColor: "white" }}>
              white
            </option>
            <option value="red" style={{ backgroundColor: "red" }}>
              red
            </option>
            <option value="green" style={{ backgroundColor: "green" }}>
              green
            </option>
            <option value="blue" style={{ backgroundColor: "blue" }}>
              blue
            </option>
            <option value="brown" style={{ backgroundColor: "brown" }}>
              brown
            </option>
            <option value="yellow" style={{ backgroundColor: "yellow" }}>
              yellow
            </option>
            <option value="purple" style={{ backgroundColor: "purple" }}>
              purple
            </option>
            <option value="teal" style={{ backgroundColor: "teal" }}>
              teal
            </option>
            <option value="pink" style={{ backgroundColor: "pink" }}>
              pink
            </option>
          </select>
        </div>
        Need specific hours?{" "}
        <input
          name="specifichours"
          type="checkbox"
          checked={isCheckedHour}
          onChange={() => {
            setIsCheckedHour(!isCheckedHour);
          }}
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
                className="big-date-picker"
              />
            </div>
            <span>More than one day?</span>{" "}
            <input
              name="moreDays"
              type="checkbox"
              checked={isCheckedEnd}
              onChange={() => setIsCheckedEnd(!isCheckedEnd)}
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
                  className="big-date-picker"
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
                className="small-date-picker"
              />
            </div>
            <span>More than one day?</span>{" "}
            <input
              name="moreDays"
              type="checkbox"
              checked={isCheckedEnd}
              onChange={() => setIsCheckedEnd(!isCheckedEnd)}
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
                  className="small-date-picker"
                />
              </div>
            ) : null}
          </>
        )}
        {editer ? (
          <>
            <button className="event-button" onClick={handleEditEvent}>Edit Task</button>
            <button className="event-button" onClick={handleDelete}>delete</button>
          </>
        ) : (
          <button className="event-button" onClick={handleAddEvent} id="newEventPadding">Add Task</button>
        )}
      </div>
    </Modal>
  );
}
