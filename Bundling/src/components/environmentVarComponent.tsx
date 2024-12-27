import React from "react";
import {text, h2} from './environmentVarComponentStyles.scss';

export const EnvironmentVar = () => {
  return (
    <div className="container">
        <div >
        <h2 className={h2}>
        Variable de entorno: 
        </h2>
        <span className={text}>
          {process.env.API_BASE}
        </span>
    </div>
    </div>
  );
};