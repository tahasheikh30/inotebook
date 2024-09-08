import React from "react";

function Alerts(props) {
  return (
    <div style={{ position: "relative" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{
            position: "fixed",  // Keep it fixed on top
            top: "0px",        // Attach it to the top of the viewport with a small gap
            left: "0",          // Start from the left edge
            width: "99vw",     // Full width of the viewport
            zIndex: 9999,       // Ensure it appears above other content
            margin: "0",        // Remove any default margin
            borderBottomLeftRadius: "15px", // Rounded corners
            borderBottomRightRadius: "15px", // Rounded corners
            boxSizing: "border-box", // Include padding in the width calculation
          }}
        >
          {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}

export default Alerts;
