import React from "react";
import { getHello } from "./helloService";
import {text, h2} from './helloComponentStyles.scss';

export const HelloComponent = () => {
  const [hello, setHello] = React.useState(0);

  React.useEffect(() => {
    const name = "Andrea";
    setHello(getHello(name));
  }, []);

  return (
    <div className="container">
      <h2 className= {h2}>Say hello:</h2>
    <span className={text}>
      {hello}
    </span>
</div>
     );
};
