import AddTask from "./AddTask";
import Calender from "./Calender";
import Calendar from "./Calendar";
import ShowTasks from "./ShowTasks";
import "./UserInfo.css"


function UserPage() {
    return(
        <>
        <h1>User Page</h1>
        <Calendar/>
        <ShowTasks/>
        <AddTask/>
        </>
    )
}
export default UserPage;