import "./LogIn.css";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../../store/user/auth-user-service";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import GenericForm from "../../features/GenericForm";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { formConfig } from "./logIn";
import { resetError } from "../../../store/user/user-slice";

function LogIn() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setErrorMessage(error);

      const timer = setTimeout(() => {
        dispatch(resetError());
        setErrorMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const handleFormSubmit = async (data) => {
    try {
      await dispatch(logInUser(data)).unwrap();
      setErrorMessage("Registration successful!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <Box>
      <Typography variant="h4" mt={6} align="center" gutterBottom>
        Log In
      </Typography>
      <Typography variant="h6" align="center">
        Don{"'"}t have an account?{" "}
        <Typography
          component="span"
          variant="h6"
          sx={{
            color: "primary.main",
            cursor: "pointer",
            textDecoration: "none",
          }}
          onClick={() => navigate("/register")}
        >
          Sign Up
        </Typography>
      </Typography>

      {errorMessage && (
        <Typography color="error" align="center" sx={{ mb: 2 }}>
          {errorMessage}
        </Typography>
      )}
      <Box
        className="logIn_box"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box className="logIn_form_box">
          <GenericForm
            formConfig={formConfig}
            onSubmit={handleFormSubmit}
            errorMessage={errorMessage}
          />
        </Box>
        <Box className="google_btn_box">
          <GoogleButton />
        </Box>
      </Box>
    </Box>
  );
}

export default LogIn;
