import React from "react";
import {background} from "./hello.module.css";

export const HelloComponent: React.FC = () => {
  return <h1 className={background}>Hello from React</h1>;
};