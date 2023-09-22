import { useContext, useState } from "react";
import AddTask from "./AddTask";
import Calendar from "./Calendar";
import { UserContext } from "../General_Components/Other/Context";
import "./UserPage.css";
import Fetcher from "../Fetcher";
import Event_Modal from "./Event_Modal";

function UserPage() {
  const { setallEvent, allEvent, userInfo, newEvent   ,setChanged } = useContext(UserContext);
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
      <h1>My Home</h1>
      <AddTask openModal={openModal} setEditer={setEditer} />
      <Event_Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        editer={editer}
        setEditer={setEditer}
      />
      { <Calendar openModal={openModal} setEditer={setEditer}/>}
    </div>
  ) : (
    <LogIn />
  )
  )
}
export default UserPage;
