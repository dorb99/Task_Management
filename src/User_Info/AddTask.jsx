import { useContext } from "react";
import { UserContext } from "../General_Components/Other/Context";
import { useMemo } from "react";

function AddTask({ openModal, setEditer }) {
  const { allEvents, setNewEvent } = useContext(UserContext);
  const nextID = useMemo(() => findID(), [allEvents]);

  function findID() {
    if (allEvents) {
      const allID = allEvents.map((event) => event.id);
      allID.sort((a, b) => a - b);
      const nextID = (() => {
        for (let index = 0; index < allID.length; index++) {
          if (!allID.includes(index)) {
            return index;
          }
        }
        return allID.length;
      })();
      return nextID;
    } else return 1;
  }
  
  const handleAddEventClick = () => {
    const newStart = new Date
    const newEnd = new Date
    newStart.setHours(0, 0, 0, 0);
    newEnd.setHours(0, 0, 0, 0);
    setNewEvent({
      id: nextID,
      title: "",
      color: "white",
      start: newStart,
      end: newEnd,
    });
    openModal();
    setEditer(false);
  };

  return (
    <>
      <div className="button_container">
      <button className="add-event-btn" onClick={handleAddEventClick}><span>Add an Event</span></button>
      </div>
    </>
  );
}

export default AddTask;
