import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const applemanInfo = {
  name: "appleman",
  age: 24,
};

const ApplemanContext = createContext(applemanInfo);

createRoot(document.getElementById("root")).render(
  <ApplemanContext.Provider value={applemanInfo}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApplemanContext.Provider>
);

export default ApplemanContext;
