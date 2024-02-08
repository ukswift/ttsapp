import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function LandingPage() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  return (
    <Box>
      <Container>
        <Typography variant="h1">Voice your thoughts</Typography>
        <Button variant="contained" onClick={loginWithRedirect}>
          login
        </Button>
      </Container>
    </Box>
  );
}

export default LandingPage;
