import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function LandingPage() {
  const { isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <Stack direction="row" justifyContent="center">
        <CircularProgress />
      </Stack>
    );
  }
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
