import React, { useContext } from "react";
import ColorContext from "../context/ColorContext";

const Hello = () => {
  let { defaultStyle, whiteMode, blackMode } = useContext(ColorContext);

  return (
    <div>
      <div
        style={{
          color: defaultStyle.color,
          backgroundColor: defaultStyle.backgroundColor,
          border: defaultStyle.border,
          textAlign: defaultStyle.textAlign
        }}
      >
        <h1>Hey! How are you doing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          porro, ex dolor voluptate, odio aspernatur excepturi ea exercitationem
          quas aliquam asperiores adipisci eos ad modi vero deserunt nostrum
          quasi architecto explicabo. Necessitatibus dicta quaerat quos saepe
          quo, architecto, sapiente magnam error, ullam atque aperiam expedita
          consequuntur eveniet placeat laudantium ea?
        </p>
      </div>
      <button onClick={whiteMode}>White Mode</button>
      <button onClick={blackMode}>Dark Mode</button>
      {/* <button onClick={blueMode}>Blue Mode</button> */}
    </div>
  );
};

export default Hello;
