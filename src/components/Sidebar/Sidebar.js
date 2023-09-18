import { motion } from "framer-motion";
import { React, useContext, useState } from "react";

import { GitIcon, LinkedInIcon } from "../Icon/Icon";
import "./Sidebar.css";
import { TabDirectory, getTabNameFromId } from "../../APIs/Directories";
import { ThemeContext } from "../../context/ThemeContext";

const DarkToggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [themeColors, setThemeColors] = useContext(ThemeContext);

  // console.log(isToggled);
  const handleToggle = () => {
    setIsToggled(!isToggled);
    setThemeColors(() => (!isToggled ? "light" : "dark"));
  };

  return (
    <motion.button
      className="dark-mode-toggle"
      initial={false}
      animate={isToggled ? "on" : "off"}
      onClick={handleToggle}
    >
      <motion.div
        className="toggle-circle"
        variants={{
          on: { x: 30 },
          off: { x: 0 },
        }}
        transition={{ duration: 0.2 }}
      ></motion.div>
    </motion.button>
  );
};

function Sidebar({ selectedTabs, setSelectedTabs, activeTab, setActiveTab }) {
  const onClickHandler = (event) => {
    const tabToOpenName = event.currentTarget.id;
    setSelectedTabs(
      selectedTabs.includes(tabToOpenName)
        ? [...selectedTabs]
        : [...selectedTabs, tabToOpenName]
    );
    setActiveTab(tabToOpenName);
  };
  return (
    <>
      <div className="file-explorer">
        <span className="file-explorer-icons material-symbols-outlined">
          description
          <span></span>
        </span>
        <GitIcon className="file-explorer-icons" />
        <LinkedInIcon className="file-explorer-icons" />
      </div>
      <div className="sidebar">
        <div className="navigation-element title-text">Richard Lopez</div>
        {Object.keys(TabDirectory).map((name) => {
          return (
            <button
              id={name}
              className="navigation-element"
              onClick={onClickHandler}
            >
              <span>
                {name === activeTab ? (
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                ) : (
                  ""
                )}
              </span>
              {TabDirectory[name]["tabName"]}
            </button>
          );
        })}

        <DarkToggle />
      </div>
    </>
  );
}

export default Sidebar;
