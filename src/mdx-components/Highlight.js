import React from "react";

const Highlight = ({ color = "#2f83e9", ...rest }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: "2px",
      color: "#fff",
      padding: "0.2rem",
    }}
    {...rest}
  />
);

export default Highlight;
