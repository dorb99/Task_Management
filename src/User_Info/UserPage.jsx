import AddTask from "./AddTask";
import Calender from "./Calender";
import ShowTasks from "./ShowTasks";


function UserPage() {
    return(
        <>
        <h1>User Page</h1>
        <Calender/>
        <ShowTasks/>
        <AddTask/>
        </>
    )
}
export default UserPage;