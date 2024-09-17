import { styled } from "@mui/material/styles";
import { Alert, AlertTitle } from "@mui/material";
import { useSnackbar } from "notistack";
import React from "react";

const StyledAlert = styled(Alert)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const StyledList = styled("ul")(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(2),
}));

export default function useFeedback() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function content(key, message = "", severity) {
    const body = typeof message === "object" ? message.body : message;
    const title = message.title;
    const bodyList = message.bodyList;

    return (
      <StyledAlert
        variant="filled"
        elevation={6}
        onClose={() => closeSnackbar(key)}
        severity={severity}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {body}
        {bodyList && bodyList.length > 0 && (
          <StyledList>
            {bodyList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </StyledList>
        )}
      </StyledAlert>
    );
  }

  const anchorOrigin = { horizontal: "center", vertical: "bottom" };

  function showSuccess(message, options = {}) {
    enqueueSnackbar(message, {
      ...options,
      preventDuplicate: true,
      anchorOrigin,
      content: (key) => content(key, message, "success"),
    });
  }

  function showInfo(message, options = {}) {
    enqueueSnackbar(message, {
      ...options,
      preventDuplicate: true,
      anchorOrigin,
      content: (key) => content(key, message, "info"),
    });
  }

  function showWarning(message, options = {}) {
    enqueueSnackbar(message, {
      ...options,
      preventDuplicate: true,
      anchorOrigin,
      content: (key) => content(key, message, "warning"),
    });
  }

  function showError(message, options = { persist: true }) {
    const newMessage = formatIfApiError(message);
    enqueueSnackbar(newMessage, {
      ...options,
      anchorOrigin,
      onClose: (event, reason, key) => {
        if (reason === "clickaway" && options.persist) {
          closeSnackbar(key);
        }
      },
      content: (key) => content(key, newMessage, "error"),
    });
  }

  function formatIfApiError(message) {
    if (message instanceof ArrayBuffer) {
      message = JSON.parse(Buffer.from(message).toString("utf8"));
    }

    let newMessage = message;
    if (message.message || message.errors) {
      if (message.errors && message.errors.length > 0) {
        newMessage = {
          title: message.message,
          bodyList: message.errors.map((e) => e.message || e.defaultMessage),
        };
      } else {
        newMessage = message.message;
      }
    }

    return newMessage;
  }

  return { showSuccess, showError, showInfo, showWarning };
}
