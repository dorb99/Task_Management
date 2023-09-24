import { useState } from "react";
import AddTask from "./AddTask";
import Calendar from "./Calendar";
import "./UserInfo.css";
import Event_Modal from "./Event_Modal";

function UserPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editer, setEditer] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="userhomecontainer">
      <AddTask openModal={openModal} setEditer={setEditer} />
      <Event_Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        editer={editer}
        setEditer={setEditer}
      />
        <Calendar openModal={openModal} setEditer={setEditer} />
    </div>
  ) 
}
export default UserPage;
