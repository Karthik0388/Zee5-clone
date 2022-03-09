import { createContext, useState } from "react";

export let DropContextApi = createContext();

let DropDownApiProvider = ({ children }) => {
  let [state, setState] = useState(false);
  let [hover, setHover] = useState(false);

  let makeToggleIt = () => {
    setState(!state);
  };

  let onHover = e => {
    setHover(!hover);
  };

  return (
    <DropContextApi.Provider
      value={{ state, makeToggleIt, onHover, hover }}
    >
      {children}
    </DropContextApi.Provider>
  );
};
export default DropDownApiProvider;
