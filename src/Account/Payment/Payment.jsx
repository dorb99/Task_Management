import React, { useState } from "react";
import { Modal } from "react-overlays";
import "./Payment.css"; // Add your CSS styling here

export default function SubscriptionModal() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [creditCardData, setCreditCardData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCreditCardChange = (e) => {
    const { name, value } = e.target;
    setCreditCardData({
      ...creditCardData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !selectedPlan ||
      !creditCardData.cardNumber ||
      !creditCardData.expirationDate ||
      !creditCardData.cvv
    ) {
      alert("Please fill in all required information before submitting.");
    } else {
      localStorage.setItem("selectedPlan", selectedPlan);
      localStorage.setItem("creditCardData", JSON.stringify(creditCardData));
      alert("Your Credit Card Information Is Safe With Me Now Thanks fucker!");
      setShowModal(false);
    }
  };

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
    <>
      <button
        id="choose-plan-button"
        className="choose-plan-button"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Choose A Plan
      </button>

      <Modal
        className="modal"
        show={showModal}
        onHide={() => setShowModal(false)}
        renderBackdrop={renderBackdrop}
      >
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <div className="modal-title">Choose your plan!</div>
            <div>
              <span
                className="close-button"
                onClick={() => setShowModal(false)}
              >
                x
              </span>
            </div>
          </div>
          <div className="modal-desc">
            <div id="select-plan">
              <span className="plan">
                <div className="plan-size">
                  <label htmlFor="plan1">
                    Basic ($10)
                    <div>
                      <ul className="what-get">
                        <li> Access to basic task management features. </li>
                        <li>Create and organize tasks with due dates.</li>
                        <li> Set task priorities.</li>
                        <li>Limited storage for task attachments.</li>
                        <li> Email notifications for task reminders.</li>
                        <li> Standard customer support.</li>
                      </ul>
                    </div>
                  </label>
                  <div className="checkbox-wrapper-31">
                    <input
                      className="checkbox-plan"
                      type="checkbox"
                      value="plan1"
                      checked={selectedPlan === "plan1"}
                      onChange={() => handlePlanChange("plan1")}
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
                    Pro ($20)
                    <div>
                      <ul className="what-get">
                        <li> All features from the Basic Plan.</li>
                        <li> Unlimited storage for task attachments.</li>
                        <li> Advanced task sorting and filtering options. </li>
                        <li>
                          Collaborate with team members on tasks.v Integration
                          with calendar apps.{" "}
                        </li>
                        <li>Priority customer support.</li>
                      </ul>
                    </div>
                  </label>
                  <div className="checkbox-wrapper-31">
                    <input
                      className="checkbox-plan"
                      type="checkbox"
                      value="plan2"
                      checked={selectedPlan === "plan2"}
                      onChange={() => handlePlanChange("plan2")}
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
                    Premium ($30)
                    <div>
                      <ul className="what-get">
                        <li>All features from the Pro Plan. </li>
                        <li>Kanban board view for task management. </li>
                        <li>Time tracking and reporting.</li>
                        <li>Customizable task templates.</li>{" "}
                        <li>Advanced analytics and insights.</li>{" "}
                        <li>24/7 dedicated customer support.</li>
                      </ul>
                    </div>
                  </label>
                  <div className="checkbox-wrapper-31">
                    <input
                      className="checkbox-plan"
                      type="checkbox"
                      value="plan3"
                      checked={selectedPlan === "plan3"}
                      onChange={() => handlePlanChange("plan3")}
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
            <div className="credit-card">
              <h2>Enter Credit Card Details</h2>
              <div className="input-container">
                <div className="input-group">
                  <span className="credit-card-symbol">&#128179;</span>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={creditCardData.cardNumber}
                    onChange={handleCreditCardChange}
                    required
                    pattern="[0-9]{16}"
                    title="Card number must be 16 digits"
                  />
                </div>
                <div className="input-group">
                  <span className="credit-card-symbol">&#128197;</span>
                  <input
                    type="text"
                    name="expirationDate"
                    placeholder="Expiration Date (MM/YY)"
                    value={creditCardData.expirationDate}
                    onChange={handleCreditCardChange}
                    required
                    pattern="^(0[1-9]|1[0-2])\/[0-9]{2}$"
                    title="Expiration date must be in MM/YY format"
                  />
                </div>
                <div className="input-group">
                  <span className="credit-card-symbol">&#128273;</span>
                </div>
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={creditCardData.cvv}
                  onChange={handleCreditCardChange}
                  required
                  pattern="[0-9]{3}"
                  title="CVV must be 3 digits"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="secondary-button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              type="submit"
              id="submit-button"
              className={`primary-button ${
                !selectedPlan ||
                !creditCardData.cardNumber ||
                !creditCardData.expirationDate ||
                !creditCardData.cvv
                  ? "disabled"
                  : ""
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
