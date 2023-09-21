import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { UserContext } from "../General_Components/Context";
import { Modal } from "react-overlays";
import users from "../UserInfo.json";
import { useEffect } from "react";

function AddTask() {
  const { allEvent, setallEvent, newEvent, setNewEvent, user, setUser } =
    useContext(UserContext);
  const [isCheckedEnd, setIsCheckedEnd] = useState(false);
  const [isCheckedHour, setIsCheckedHour] = useState(false);
  const [taskAdder, setTaskAdder] = useState(false);
  const renderBackdrop = (props) => (
    <div className="backdrop_adder" {...props} />
  );

  function handleAddEvent() {
    setallEvent([...allEvent, newEvent]);
    setTaskAdder(false);
  }

  return (
    <>
      <div className="modal-AddEvent-container">
        <button
          className="btn-Adder"
          type="button"
          onClick={() => {
            setTaskAdder(true);
          }}
        >
          Add an Event
        </button>
        <Modal
          className="modal_Adder"
          show={taskAdder}
          onHide={() => {
            setTaskAdder(false);
          }}
          renderBackdrop={renderBackdrop}
        >
          <div id="modal-con">
            <h2 className="modal-title">Add New Event</h2>
            <div>
              <input
                type="text"
                placeholder="Add Title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
              />
                <br/>
              <select
                value={newEvent.color}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, color: e.target.value })
                }
              >
                <option value="white" style={{backgroundColor: "white"}}>white</option>
                <option value="red" style={{backgroundColor: "red"}}>red</option>
                <option value="green" style={{backgroundColor: "green"}}>green</option>
                <option value="blue" style={{backgroundColor: "blue"}}>blue</option>
                <option value="brown" style={{backgroundColor: "brown"}}>brown</option>
                <option value="yellow" style={{backgroundColor: "yellow"}}>yellow</option>
                <option value="purple" style={{backgroundColor: "purple"}}>purple</option>
                <option value="teal" style={{backgroundColor: "teal"}}>teal</option>
                <option value="pink" style={{backgroundColor: "pink"}}>pink</option>
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
            <button onClick={handleAddEvent}>Add Task</button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default AddTask;
