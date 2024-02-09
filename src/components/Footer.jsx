// import React from "react";
// import { Container, Typography, Link } from "@mui/material";

// const footerStyle = {
//   backgroundColor: "#1976d2",
//   color: "#fff",
//   padding: "20px 0",
//   marginBottom: "auto",
//   textAlign: "center",
// };

// const Footer = () => {
//   return (
//     <footer style={{ ...footerStyle, position: "sticky" }}>
//       <Container maxWidth="lg">
//         <Typography variant="body1" color="inherit">
//           Your footer content goes here.
//         </Typography>
//         <Typography variant="body2" color="inherit">
//           © {new Date().getFullYear()} Your Website Name
//         </Typography>
//         <Typography variant="body2" color="inherit">
//           <Link color="inherit" href="#">
//             Privacy Policy
//           </Link>
//           {" | "}
//           <Link color="inherit" href="#">
//             Terms of Service
//           </Link>
//         </Typography>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Container, Typography, Link } from "@mui/material";

const footerStyle = {
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: "20px 0",
  width: "100%",
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  left: 0,
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Link
          variant="body1"
          color="inherit"
          sx={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/utkarsha-kousik-267228216/"
          target="_blank"
        >
          © Utkarsha Kousik
        </Link>
        <Typography variant="body2" color="inherit" sx={{ mt: 1 }}>
          <a
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            target="_blank"
            href="https://github.com/ukswift/ttsapp"
          >
            Find the source code here (Github)
          </a>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
