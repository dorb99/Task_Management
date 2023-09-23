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
    setNewEvent({
      id: nextID,
      title: "",
      color: "white",
      start: new Date(),
      end: new Date(),
    });
    openModal();
    setEditer(false);
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
