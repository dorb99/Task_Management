import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../General_Components/Other/Context";
function CreditCardSection() {
  const { setCardInfo, cardInfo } = useContext(UserContext);
 

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const newCardInfo = { ...cardInfo, cardNumber: value };
    setCardInfo(newCardInfo);
  };

  const handleExpirationDateChange = (e) => {
    const value = e.target.value;
    const newCardInfo = { ...cardInfo, expirationDate: value };
    setCardInfo(newCardInfo);
  };
  const handleCVVChange = (e) => {
    const value = e.target.value;
    const newCardInfo = { ...cardInfo, CVV: value };
    setCardInfo(newCardInfo);
  };

  useEffect(() => {
    const storedCardNumber = localStorage.getItem("cardNumber");
    const storedExpirationDate = localStorage.getItem("expirationDate");
    const storedCVV = localStorage.getItem("cvv");

    if (storedCardNumber)
      setCardInfo({ ...cardInfo, cardNumber: storedCardNumber });
    if (storedExpirationDate)
      setCardInfo({ ...cardInfo, expirationDate: storedExpirationDate });
    if (storedCVV) setCardInfo({ ...cardInfo, CVV: storedCVV });
  }, []);

  return (
    <div className="credit-card-section">
      <h3>Credit Card Information</h3>
      <div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardInfo.number}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            pattern="^[0-9]{16}$"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            value={cardInfo.expirationDate}
            onChange={handleExpirationDateChange}
            placeholder="MM/YY"
            pattern="^[0-9]{4}$"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cardInfo.cvv}  
            onChange={handleCVVChange}
            placeholder="CVV"
            pattern="^[0-9]{3}$"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default CreditCardSection;
