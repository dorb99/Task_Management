import { useContext } from "react";
import AddTask from "./AddTask";
import Calendar from "./Calendar";
import ShowTasks from "./ShowTasks";
import { UserContext } from "../General_Components/Context";


function UserPage() {
  const { setallEvent, allEvent } = useContext(UserContext);

  return (
    <>
      <h1>User Page</h1>
      {allEvent.length !== 0 && <Calendar />}
      <ShowTasks />
      <AddTask />
    </>
  );
}
export default UserPage;
