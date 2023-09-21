import { useContext } from "react";
import AddTask from "./AddTask";
import Calendar from "./Calendar";
import { UserContext } from "../General_Components/Context";
import "./UserInfo.css"
import Fetcher from "../Fetcher";


function UserPage() {
  const { setallEvent, allEvent, userInfo } = useContext(UserContext);

  return (
    <div className="userhomecontainer">
      <h1>My Home</h1>
      <AddTask />
      { <Calendar />}
    </div>
  );
}
export default UserPage;
