import React from "react";
import PropTypes from "prop-types";

import { Box, Paper, Typography } from "@mui/material";

const EmptyPanel = ({ message }) => {
  return (
    <Box component={Paper} padding={2} textAlign="center">
      <Typography variant="h6" color="textSecondary">
        {message ? message : ""}
      </Typography>
    </Box>
  );
};

EmptyPanel.propTypes = {
  message: PropTypes.string,
};

EmptyPanel.defaultProps = {
  message: "",
};

export default EmptyPanel;
