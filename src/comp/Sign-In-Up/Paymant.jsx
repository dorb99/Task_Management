import React, { useState } from "react";
import { Modal } from "react-overlays";
import "./Paymant.css";
import Credit from "./CreditCard";
export default function Modals() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("plan1");

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  const handleClose = () => setShowModal(false);

  const handleSuccess = () => {
    console.log("success");
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
        <div>
          <div className="modal-header">
            <div className="modal-title">Log In</div>
            <div>
              <span className="close-button" onClick={handleClose}>
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <div
              id="select-plan"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
            >
              <span className="plan">
                <div className="plan-size">
                  <label htmlFor="plan1">
                    Plan 1 ($10)
                    <p>
                      <ul>
                        <li className="what-get">Fully working Calendar</li>
                        <li className="what-get">
                          Design each of your tasks as you wish
                        </li>
                        <li className="what-get">A task orgenaizer</li>
                      </ul>
                    </p>
                  </label>
                  <input type="checkbox" id="plan1" value="plan1" />
                </div>
                <div className="plan-size">
                  <label htmlFor="plan2">
                    Plan 1 ($10)
                    <p>
                      <ul>
                        <li className="what-get">Fully working Calendar</li>
                        <li className="what-get">
                          Design each of your tasks as you wish
                        </li>
                        <li className="what-get">A task orgenaizer</li>
                      </ul>
                    </p>
                  </label>
                  <input type="checkbox" id="plan2" value="plan2" />
                </div>
                <div className="plan-size">
                  <label htmlFor="plan3">
                    Plan 1 ($10)
                    <p>
                      <ul>
                        <li className="what-get">Fully working Calendar</li>
                        <li className="what-get">
                          Design each of your tasks as you wish
                        </li>
                        <li className="what-get">A task orgenaizer</li>
                      </ul>
                    </p>
                  </label>
                  <input type="checkbox" id="plan3" value="plan3" />
                </div>
              </span>
            </div>
            <div className="paymant">
              <Credit />
            </div>
          </div>
          <div className="modal-footer">
            <button className="secondary-button" onClick={handleClose}>
              Close
            </button>
            <button className="primary-button" onClick={handleSuccess}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
