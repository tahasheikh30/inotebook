import React from "react";

function Alerts(props) {

  // If there's no alert, return null to prevent rendering the alert component
  if (!props.alert) {
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        className={`alert alert-${props.alert.type}`}
        role="alert"
        style={{
          position: "fixed",
          top: "0px",
          left: "0",
          width: "99vw",
          zIndex: 9999,
          margin: "0",
          paddingRight: "2rem", // Add padding to prevent overlap
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          boxSizing: "border-box",
        }}
      >
        <span>{props.alert.msg}</span>
      </div>
    </div>
  );
}

export default Alerts;
