import React, { useState } from "react";
import ColorContext from "./ColorContext";

let defaultStyle = {
  color: "black",
  backgroundColor: "white",
  border: "1px solid  red",
  textAlign: "center"
};

const ColorProvider = (props) => {
  let [style, setStyle] = useState(defaultStyle);

  return (
    <ColorContext.Provider
      value={{
        defaultStyle: style,
        whiteMode: () => setStyle(defaultStyle),
        blackMode: () =>
          setStyle({
            ...style,
            color: "white",
            backgroundColor: "black",
            border: "1px solid  white",
            textAlign: "center"
          })
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;

// 3 buttons = > 1 button => use one button to change all style

// localstroage:
//s
