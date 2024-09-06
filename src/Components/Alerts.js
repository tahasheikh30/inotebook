import React from "react";

function Alerts(props) {
  return (
    <div style={{ height: "15px", margin:"0px",
      marginBottom:"60px"
    }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
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
