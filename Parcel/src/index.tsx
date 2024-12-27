import React from "react";
import{createRoot} from "react-dom/client";
import { HelloComponent } from "./hello";
import { EnvVarComponent } from "./envVar";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        <HelloComponent />
        <EnvVarComponent />
    </>
);