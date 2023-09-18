import { React, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function TopBar() {
  const themeContext = useContext(ThemeContext);
  const genericCircleStyling = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "8px",
  };

  const redCircle = { ...genericCircleStyling, backgroundColor: " #FF605C" };
  const yelloCircle = { ...genericCircleStyling, backgroundColor: "#FFBD44" };
  const greenCircle = { ...genericCircleStyling, backgroundColor: "#00CA4E" };

  return (
    <div
      className={`top-bar ${themeContext[0] === "light" ? "light" : "dark"}`}
    >
      <span style={redCircle}></span>
      <span style={yelloCircle}></span>
      <span style={greenCircle}></span>
    </div>
  );
}
