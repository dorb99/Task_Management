import React from "react";
import "./QAPage.css";
import {useNavigate} from "react-router-dom"

function QAPage() {
  const navigate = useNavigate();
  return (
    <div className="qa-container">
      <h1>Questions and Answers</h1>
      <button
        onClick={() => {
          alert("fuck you");
        }}
      >
        click here
      </button>

      <div className="qa-section">
        <div className="qa-question">
          <h1 className="QHeader">Problem 1: Events Won't Load</h1>
          <h3 className="Qexample">
            "I can't see any events on my page. What should I do?"
          </h3>
          <div className="qa-answer">
            <ul>
              <li className="Answer">
                <strong>Reload the Page:</strong> Sometimes, a simple page
                refresh can resolve this issue.
              </li>
              <li className="Answer">
                <strong>Check Your Login:</strong> Ensure that you're logged in
                with the correct user account. Events may be associated with
                specific user accounts.
              </li>
              <li className="Answer">
                <strong>Internet Connection:</strong> Verify your internet
                connection is stable.
              </li>
              <li className="Answer">
                <strong>Clear Cache:</strong> Clear your browser cache as it may
                be causing loading issues.
              </li>
            </ul>
          </div>
        </div>

        <div className="qa-question">
          <h1 className="QHeader">Problem 2: Unable to Add New Event</h1>
          <h3 className="Qexample">
            "I'm trying to add a new event, but it's not working. What could be
            the problem?"
          </h3>
          <ul>
            <li className="Answer">
              <strong>Check Required Fields:</strong> Ensure you've filled out
              all the required fields when adding an event, such as the event
              title and date.
            </li>
            <li className="Answer">
              <strong>Date Format:</strong> Make sure the date and time format
              matches the required format (e.g., "MM/DD/YYYY HH:MM AM/PM").
            </li>
            <li className="Answer">
              <strong>Internet Connection:</strong> Verify your internet
              connection; a poor connection might prevent the event from being
              added.
            </li>
            <li className="Answer">
              <strong>Browser Compatibility:</strong> Try using a different web
              browser; some browsers may have compatibility issues.
            </li>
          </ul>
        </div>

        <div className="qa-question">
          <h1 className="QHeader">Problem 3: Account Login Issue</h1>
          <h3 className="Qexample">
            "I can't log in to my account. What steps should I take?"
          </h3>
          <div className="qa-answer">
            <ul>
              <li className="Answer">
                <strong>Check Credentials:</strong> Double-check that you're
                entering the correct username and password.
              </li>
              <li className="Answer">
                <strong>Password Reset:</strong> If you've forgotten your
                password, use the 'Forgot Password' option to reset it.
              </li>
              <li className="Answer">
                <strong>Account Lock:</strong> Ensure your account is not locked
                due to multiple failed login attempts.
              </li>
              <li className="Answer">
                <strong>Contact Support:</strong> If issues persist, contact
                customer support for assistance.
              </li>
            </ul>
          </div>
        </div>

        <div className="qa-question">
          <h1 className="QHeader">Problem 4: Event Date Error</h1>
          <h3 className="Qexample">
            "The event date is incorrect. How can I fix it?"
          </h3>
          <div className="qa-answer">
            <ul>
              <li className="Answer">
                <strong>Edit Event:</strong> Access the event details and update
                the date and time to the correct values.
              </li>
              <li className="Answer">
                <strong>Save Changes:</strong> After making corrections,
                remember to save the changes to the event.
              </li>
              <li className="Answer">
                <strong>Verify Time Zones:</strong> Ensure that the event date
                and time are set in the correct time zone.
              </li>
              <li className="Answer">
                <strong>Refresh Page:</strong> Sometimes, refreshing the page
                may display the corrected date.
              </li>
            </ul>
          </div>
        </div>
      <h5>Didn't found what you were looking for?  <br/> <span className="span-btn"onClick={() => navigate("../ContactUs")}>Contact us</span> with your problem and we will help you!</h5>
      
      </div>  
    </div>
  );
}

export default QAPage;
