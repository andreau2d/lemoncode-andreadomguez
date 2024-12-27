import React from "react";
import {background, text} from "./envVar.module.scss";

export const EnvVarComponent: React.FC = () => {
  return (
    <div><h3 className={background}>Environment Variable:</h3>
    <span className={text}>{process.env.API_BASE}</span></div>
  );
};