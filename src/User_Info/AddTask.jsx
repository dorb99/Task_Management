import { useContext, useState } from "react";
import { UserContext } from "../General_Components/Other/Context";

function AddTask({ openModal, setEditer }) {
  const {
    allEvent,
    setallEvent,
    newEvent,
    setNewEvent,
    user,
    setUser,
    setChanged,
    taskAdder,
    setTaskAdder,
  } = useContext(UserContext);
  const maxId = allEvent.length > 0 ? Math.max(...allEvent.map((task) => task.id)) : 0;
  const nextId = maxId + 2;

  const handleAddEventClick = () => {
    setNewEvent({
      id: nextId,
      title: "",
      color: "white",
      start: new Date(),
      end: new Date(),
    });
    openModal();
    setEditer(false)
  };

  return (
    <>
      <div className="modal-AddEvent-container">
        <button
          className="btn-Adder"
          type="button"
          onClick={handleAddEventClick}
        >
          Add an Event
        </button>
      </div>
    </>
  );
}

export default AddTask;
