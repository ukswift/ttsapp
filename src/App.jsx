import axios from "axios";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingButton from "@mui/lab/LoadingButton";

import { AudioList } from "./components/AudioList";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import LandingPage from "./LandingPage";
import { Core } from "./components/Core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  console.log(useAuth0());
  const x = isAuthenticated ? <Core /> : <LandingPage />;
  return (
    <Box>
      <ResponsiveAppBar style={{ position: "sticky" }} />
      <Box sx={{ mt: 4 }}>{x}</Box>
      <ToastContainer position="bottom-center" />
    </Box>
  );
  // return isAuthenticated? <></>
  // return (
  //   true && (
  //     <>
  //       <ResponsiveAppBar />
  //       <LandingPage />
  //       <Core />
  //     </>
  //   )
  // );
}

export default App;
