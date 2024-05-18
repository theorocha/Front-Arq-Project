import React from "react";
import { Typography } from "@mui/material";

function Dado({ label, value, negrito = false, bodyVariant = "body2" }) {
  let actualValue = value;

  return (
    <React.Fragment>
      <Typography variant="caption" component="div" color="textSecondary">
        {label}
      </Typography>
      {negrito ? (
        <Typography component="div" variant={bodyVariant}>
          <strong>{actualValue || "-"}</strong>
        </Typography>
      ) : (
        <Typography component="div" variant={bodyVariant}>
          {actualValue || "-"}
        </Typography>
      )}
    </React.Fragment>
  );
}

export default Dado;
