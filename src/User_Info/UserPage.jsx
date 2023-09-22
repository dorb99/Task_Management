import { useContext } from "react";
import AddTask from "./AddTask";
import Calendar from "./Calendar";
import { UserContext } from "../General_Components/Other/Context";
import "./UserPage.css";
import Fetcher from "../Fetcher";


function UserPage() {
  const { setallEvent, allEvent, userInfo } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  return (user !== "no-user" && user !== undefined ? (
    <div className="userhomecontainer">
      <h1>My Home</h1>
      <AddTask />
      {<Calendar />}
    </div>
  ) : (
    <LogIn />
  )
  ) 
}
export default UserPage;
