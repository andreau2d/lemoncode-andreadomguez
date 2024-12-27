 
import React from "react";
import { createRoot } from "react-dom/client";
import { EnvironmentVar } from "./components/environmentVarComponent";
import { HelloComponent } from "./helloComponent";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./content/logo.png";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <img src={logo} alt= "Logo" />
    <EnvironmentVar />
    <HelloComponent />
  </div>
);

