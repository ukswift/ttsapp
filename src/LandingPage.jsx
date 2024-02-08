import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
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
    <Box
      sx={{
        backgroundImage:
          "url('https://source.unsplash.com/black-and-gray-condenser-microphone-p44B3PKChs4')",
        height: "87vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: -4,
        p: 2,
        textShadow: "2px 2px 8px rgba(0,0,0,1)",
        // opacity: "0.9",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ backgroundColor: "redl" }}
      >
        <Grid item sx={{ mt: 5 }}>
          <Typography variant="h2" sx={{ fontSize: "6rem", color: "white" }}>
            Voice your thoughts
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 5 }}>
          <Typography
            variant="body1"
            sx={{ color: "white", fontSize: "1.3rem" }}
          >
            Convert your thoughts to speech, replay the recordings, share the
            notes on social media{" "}
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 5 }}>
          <Button variant="contained" size="large" onClick={loginWithRedirect}>
            login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage;
