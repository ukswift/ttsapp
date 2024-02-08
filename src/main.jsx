// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="ttsapp.jp.auth0.com"
    clientId="uvi0vtPhqqKur5hLx1SInJjIdkWlFhrN"
    authorizationParams={{
      // redirect_uri: "http://localhost:5173",
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
// root.render(
//   <Auth0Provider
//     domain="ttsapp.jp.auth0.com"
//     clientId="uvi0vtPhqqKur5hLx1SInJjIdkWlFhrN"

//     authorizationParams={{
//       redirect_uri: "http://localhost:5173",
//       // redirect_uri: window.location.origin,
//     }}
//   >
//     <App />
//   </Auth0Provider>
// );
