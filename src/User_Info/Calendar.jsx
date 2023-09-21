import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../General_Components/Other/Context";
import { Modal } from "react-overlays";

export default function PrintCalendar() {
  const { allEvent, setallEvent, user, userInfo } = useContext(UserContext);
  const [calendarEvents, setCalendarEvents] = useState();
  const [currentEvent, setCurrentEvent] = useState({});
  const [taskChanger, setTaskChanger] = useState(false);
  const localizer = momentLocalizer(moment);
  const renderBackdrop = (props) => (
    <div className="backdrop_adder" {...props} />
  );

  const handleDoubleClick = (event) => {
    console.log(event.title + " two click");
  };
  const handleOneClick = (event) => {
    setTaskChanger(true);
    setCurrentEvent(event);
  };

  useEffect(() => {
    const eventsCollector = allEvent.map((event) => {
      const { title, start, end, color } = event;
      const formattedStart = new Date(start);
      const formattedEnd = new Date(end);
      return { title, start: formattedStart, end: formattedEnd, color: color };
    });
    setCalendarEvents(eventsCollector);
  }, [allEvent]);

  return (
    <>
      <div>
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px", width: 600 }}
          onSelectEvent={handleOneClick}
          onDoubleClickEvent={handleDoubleClick}
          eventPropGetter={(calendarEvents) => {
            const backgroundColor = calendarEvents.color
              ? calendarEvents.color
              : "white";
            return { style: { backgroundColor } };
          }}
        />
        {currentEvent.title && (
          <Modal
            className="modal_Adder"
            show={taskChanger}
            onHide={() => {
              setTaskChanger(false);
            }}
            renderBackdrop={renderBackdrop}
          >
            <div style={{ color: currentEvent.color || "black" }}>
              <h4>Title: {currentEvent.title}</h4>
              {currentEvent.start.toLocaleString() === currentEvent.end.toLocaleString() ? (
                <h4>Time: {currentEvent.start.toLocaleString()}</h4>
              ) : (
                <>
                  <h4>Start time: {currentEvent.start.toLocaleString()}</h4>
                  <h4>End time: {currentEvent.end.toLocaleString()}</h4>
                </>
              )}
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
