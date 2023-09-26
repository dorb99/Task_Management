import React, { useState } from "react";
import { Modal } from "react-overlays";
import "./Paymant.css";
import Credit from "./CreditCard";

export default function Modals() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  console.log(selectedPlan);
  const [isChecked, setIsChecked] = useState(false);

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const handleClose = () => setShowModal(false);

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
    setIsChecked(true);
  };

  const handleSuccess = () => {
    if (!isChecked || !selectedPlan) {
      alert("Please choose a plan before submitting.");
    } else {
      console.log("success");
      // Additional logic to handle the submission
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="modal-example">
      <div>
        <button type="button" onClick={() => setShowModal(true)}>
          Choose A Plan
        </button>
      </div>

      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <div className="modal-title">Choose your plan!</div>
            <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <div id="select-plan">
              <span className="plan">
                <div className="plan-size">
                  <label htmlFor="plan1">
                    Plan 1 ($10)
                    <p>
                      <ul>
                        <li className="what-get">1.Fully working Calendar</li>
                        <li className="what-get">
                          2.Design each of your tasks as you wish
                        </li>
                        <li className="what-get">3.A task organizer</li>
                      </ul>
                    </p>
                  </label>
                  <div className="checkbox-wrapper-31">
                    <input
                      className="checkbox-plan"
                      type="checkbox"
                      value="plan1"
                      checked={selectedPlan === "plan1"}
                      onChange={handlePlanChange}
                    />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                </div>
                <div className="plan-size">
                  <label htmlFor="plan2">
                    Plan 2 ($20)
                    <p>
                      <ul>
                        <li className="what-get">1.Everything from plan 1</li>
                        <li className="what-get">
                          2.Design each of your tasks as you wish
                        </li>
                        <li className="what-get">3.A task organizer</li>
                      </ul>
                    </p>
                  </label>
                  <div className="checkbox-wrapper-31">
                    <input
                      className="checkbox-plan"
                      type="checkbox"
                      value="plan2"
                      checked={selectedPlan === "plan2"}
                      onChange={handlePlanChange}
                    />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                </div>
                <div className="plan-size">
                  <label htmlFor="plan3">
                    Plan 3 ($30)
                    <p>
                      <ul>
                        <li className="what-get">1.Fully working Calendar</li>
                        <li className="what-get">
                          2.Design each of your tasks as you wish
                        </li>
                        <li className="what-get">3.A task organizer</li>
                      </ul>
                    </p>
                  </label>
                  <div className="checkbox-wrapper-31">
                    <input
                      className="checkbox-plan"
                      type="checkbox"
                      value="plan3"
                      checked={selectedPlan === "plan3"}
                      onChange={handlePlanChange}
                    />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                </div>
              </span>
            </div>
            <div className="payment">
              <Credit />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="secondary-button"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="primary-button"
              onClick={handleSuccess}
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
