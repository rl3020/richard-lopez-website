import { React, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function BottomBar() {
  const themeContext = useContext(ThemeContext);
  const isLightMode = themeContext[0] === "light";
  return (
    <div className={`bottom-bar ${isLightMode ? "light" : "dark"}`}>
      <span
        style={{
          color: isLightMode ? "black" : "#d3d3d3",
          fontFamily: "Roboto",
          fontSize: "12px",
          marginLeft: "8px",
          letterSpacing: "1.5px",
        }}
      >
        Hello world, I'm built with React! Hope you enjoy
        <span role="img" aria-label="What's up world emoji!">
          🤙🏽
        </span>
      </span>
    </div>
  );
}
