import React, { useState } from "react";
import { Popup } from "reactjs-popup";
const TrackPackage = () => {
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [signature, setSignature] = useState("false");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const handleCreate = () => {
    try {
      if (
        !senderName ||
        !receiverName ||
        !source ||
        !destination ||
        !weight ||
        !quantity ||
        !trackingNumber
      ) {
        const err = new Error("Enter all the fields");
        throw err;
      }
      alert("Creation Successful");
      setOpenPopup(true);
    } catch (err) {
      const message = err.message || "Unknown Error";
      alert(`Error: ${message}`);
    }
  };
  const handleTrackPackage = () => {
    try {
      if (!trackingNumber) {
        const err = new Error("Enter  the tracking Number");
        throw err;
      }
      alert(`Your Package is enroute`);
    } catch (err) {
      console.log(err);
      const message = err.message;
      alert(`Error: ${message}`);
    }
  };
  const handleReset = () => {
    setSenderName("");
    setReceiverName("");
    setSource("");
    setDestination("");
    setWeight("");
    setQuantity("");
    setSignature("");
    setTrackingNumber("");
    setOpenPopup("");
  };
  const handleCancel = () => {
    alert("Package Cancelled");
    handleReset();
  };
  return (
    <div className="vh-100">
      <div className="h-25">
        <nav className="h-25 bg-info-subtle">
          <h1 className="text-center fs-3 align-middle">Package Tracking</h1>
        </nav>
      </div>
      <div id="remainingDiv" className="d-flex flex-row h-50">
        <div
          id="subDiv1"
          className=" h-75 w-50 d-flex flex-column justify-content-evenly align-items-center"
        >
          <div id="senderNameDiv">
            Sender Name:
            <input
              type="text"
              onChange={(e) => {
                setSenderName(e.target.value);
              }}
              value={senderName}
              id="senderName"
            />
          </div>
          <div id="receiverNameDiv">
            Receiver Name:
            <input
              type="text"
              onChange={(e) => {
                setReceiverName(e.target.value);
              }}
              value={receiverName}
              id="receiverName"
            />
          </div>
          <div id="source">
            Source:
            <input
              type="text"
              onChange={(e) => {
                setSource(e.target.value);
              }}
              value={source}
              id="source"
            />
          </div>
          <div id="destination">
            Destination:
            <input
              type="text"
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              value={destination}
              id="destination"
            />
          </div>
        </div>
        <div
          id="subDiv2"
          className="d-flex flex-column justify-content-evenly align-items-center h-75 w-50"
        >
          <div id="weightDiv">
            Weight (KGS):
            <input
              type="number"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              id="weight"
            />
          </div>
          <div id="quantityDiv">
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              id="quantity"
            />
          </div>
          <div id="signatureRequiredDiv">
            Signature:
            <input
              type="checkbox"
              value={signature}
              onChange={(e) => {
                setSignature(e.target.value);
              }}
              id="signature"
            />
          </div>
          <div id="trackingNumberDiv">
            Tracking:
            <input
              type="number"
              value={trackingNumber}
              onChange={(e) => {
                setTrackingNumber(e.target.value);
              }}
              id="trackingNumber"
            />
          </div>
        </div>
      </div>
      <div id="buttonsDiv" className="d-flex flex-row justify-content-evenly">
        <button
          className="btn btn-outline-success"
          onClick={handleCreate}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Create
        </button>
        <button
          className="btn btn-outline-success"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={handleTrackPackage}
        >
          Track Package
        </button>
        <button
          onClick={handleReset}
          className="btn btn-outline-success"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Reset
        </button>
        <button
          className="btn btn-outline-success"
          onClick={handleCancel}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Cancel
        </button>
      </div>
      <Popup
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
        modal
        contentStyle={{
          height: "50vh",
          width: "50vw",
          padding: "100px",
          background: "rgba(128,128,128,0.9)",
        }}
      >
        <div className="d-flex flex-column justify-content-evenly align-items-center h-100 w-100">
          <h5>Package Successfully Created</h5>
          <p>Tracking Number: {trackingNumber}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            Close
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default TrackPackage;
