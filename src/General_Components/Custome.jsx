import React, { useState } from "react";
import {Modal} from "react-overlays";

export default function Custome() {
  const [showModal, setShowModal] = useState(false);

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
<input type="text" />
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
