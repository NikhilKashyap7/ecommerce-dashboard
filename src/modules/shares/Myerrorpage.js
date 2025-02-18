import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../assests/Myerrorpage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center error-container">
      <div className="error-content">
        <Typography variant="h1" className="error-code">
          404
        </Typography>
        <Typography variant="h5" className="error-message">
          Oops! Looks like you're lost in space.
        </Typography>
        <Typography variant="body1" className="error-description">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="mt-3"
          onClick={() => navigate("/")}
        >
          Return Home
        </Button>
      </div>
      <div className="astronaut"></div>
    </Container>
  );
};

export default ErrorPage;
