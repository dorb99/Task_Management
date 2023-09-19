import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../General_Components/Context";
import "./Calendar.css";
import Paper from "@mui/material/Paper";
import {
  EditingState,
  ViewState,
  IntegratedEditing
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  EditRecurrenceMenu,
} from "@devexpress/dx-react-scheduler-material-ui";

function TaskCalendar() {
  const [tasks, setTasks] = useState([]);

  
  function formatDateToISO(dateString) {
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}T`;
  }

  
  const handleAppointmentDoubleClick = (e) => {
    // Handle the double-click event here
    const appointment = e.appointment;
    console.log("Double-clicked on appointment:", appointment);
  };

  const currentDate = new Date();


  useEffect(() => {
    PrintingCalendarTasks();
  }, []);
  return (
    <div>
      <Paper id="Calendar">
        <Scheduler data={tasks} height={660}>
        <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
          <MonthView
            style={{
              height: "100%",
              width: "70%",
            }}
            // onDoubleClick={AppointmentDoubleClick()}
          />
          {/* <Appointments key={tasks} />
          <Appointments.Appointment
            onDoubleClick={handleAppointmentDoubleClick}
          /> */}
          <Appointments/>

        </Scheduler>
      </Paper>
    </div>
  );
}

export default TaskCalendar;
