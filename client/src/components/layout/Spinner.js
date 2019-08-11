import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <Fragment>
      <span
        style={{
          margin: "auto",
          display: "block",
          width: "50px",
          fontSize: "25px"
        }}
      >
        <i className="fa fa-spinner fa-spin" />
      </span>
    </Fragment>
  );
};

export default Spinner;
