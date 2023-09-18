import { React, useContext, useState } from "react";

import BottomBar from "./components/BottomBar/BottomBar";
import Introduction from "./components/Introduction/Introduction";
import Sidebar from "./components/Sidebar/Sidebar";
import { TabDirectory } from "./APIs/Directories";
import { ThemeContext } from "./context/ThemeContext";
import TopBar from "./components/TopBar/TopBar";

const Tab = ({
  id,
  tabId,
  tabIcon,
  tabName,
  setSelectedTabs,
  selectedTabs,
  activeTab,
  setActiveTab,
}) => {
  const handleOnClickClose = () => {
    const updatedTabs = [];
    for (let i = 0; i < selectedTabs.length; i++) {
      const selectedTab = TabDirectory[selectedTabs[i]];
      if (selectedTab.tabId != tabId) {
        updatedTabs.push(selectedTabs[i]);
      }
    }
    setSelectedTabs(updatedTabs);
  };

  const handleOnClick = () => {
    setActiveTab(id);
    return;
  };

  return (
    <div
      key={tabId}
      className={`tab ${activeTab === id ? "selected" : ""}`}
      onClick={handleOnClick}
    >
      <div className="tab-content">
        <span style={{ display: "flex", alignItems: "center" }}>
          {tabIcon}
          <span> {tabName} </span>
        </span>
        <button
          className="tab-close-button material-symbols-outlined"
          style={{ position: "absolute", right: "10px" }}
          onClick={handleOnClickClose}
        >
          close
        </button>
      </div>
    </div>
  );
};

const TabSection = ({
  selectedTabs,
  setSelectedTabs,
  activeTab,
  setActiveTab,
}) => {
  console.log(selectedTabs);
  const tabOrderToRender = [];
  for (let i = 0; i < selectedTabs.length; i++) {
    const selectedTab = TabDirectory[selectedTabs[i]];
    tabOrderToRender.push(
      <Tab
        id={selectedTab.id}
        tabId={selectedTab.tabId}
        tabIcon={selectedTab.tabIcon}
        tabName={selectedTab.tabName}
        setSelectedTabs={setSelectedTabs}
        selectedTabs={selectedTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );
  }

  return <div className="tab-bar">{tabOrderToRender}</div>;
};

// Currently selected directory
const CurrentDirectoryBar = ({ activeTab }) => {
  return (
    <div
      style={{
        boxShadow: "-1px 8px 8px -8px black",
        position: "relative",
        zIndex: "10",
      }}
      className="current-directory-bar"
    >
      <span>Richard Lopez</span>
      <span className="material-symbols-outlined">chevron_right</span>
      <span>{TabDirectory[activeTab]["tabName"]}</span>
    </div>
  );
};

// Section with tabs, current directory, and code section
const CodeSection = ({
  selectedTabs,
  setSelectedTabs,
  activeTab,
  setActiveTab,
}) => {
  const createIdeNums = () => {
    let numArray = [];
    for (let i = 0; i < 38; i++) {
      numArray.push(
        <div key={i} className="numbers">
          {i}
        </div>
      );
    }
    return numArray;
  };

  return (
    <div className="code-section-wrapper">
      <TabSection
        selectedTabs={selectedTabs}
        setSelectedTabs={setSelectedTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CurrentDirectoryBar activeTab={activeTab} />
      <div className="coding-section">
        <div className="numbers-wrapper">{createIdeNums()}</div>
        {activeTab === "whoAmI" ? <Introduction /> : ""}
      </div>
    </div>
  );
};

export default function App() {
  const [themeColors, setThemeColors] = useState("dark");
  const [selectedTabs, setSelectedTabs] = useState(["whoAmI"]);
  const [activeTab, setActiveTab] = useState("whoAmI");

  return (
    <>
      <ThemeContext.Provider value={[themeColors, setThemeColors]}>
        <TopBar />
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar
            selectedTabs={selectedTabs}
            setSelectedTabs={setSelectedTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <CodeSection
            selectedTabs={selectedTabs}
            setSelectedTabs={setSelectedTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <BottomBar />
      </ThemeContext.Provider>
    </>
  );
}
