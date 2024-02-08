import "./App.css";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/NavBar";
import LandingPage from "./LandingPage";
import { Core } from "./components/Core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  const { isAuthenticated } = useAuth0();
  console.log(useAuth0());
  const component = isAuthenticated ? <Core /> : <LandingPage />;
  return (
    <Box>
      <NavBar style={{ position: "sticky" }} />
      <Box sx={{ mt: 4 }}>{component}</Box>
      <Footer />
      <ToastContainer position="bottom-center" />
    </Box>
  );
};

export default App;
