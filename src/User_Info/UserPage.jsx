import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import Calendar from "./Calendar";
import "./UserInfo.css";
import Event_Modal from "./Event_Modal";
import { Circles } from "react-loader-spinner";
function UserPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editer, setEditer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="hourglass">
          <Circles
            visible={true}
            width={"300px"}
            height={"300px"}
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
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
      )}
    </>
  );
}
export default UserPage;
