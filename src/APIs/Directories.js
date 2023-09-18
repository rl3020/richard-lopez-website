import { React } from "react";
import { PythonIcon } from "../components/Icon/Icon";

const TabDirectory = {
  whoAmI: {
    tabId: 1,
    tabIcon: <PythonIcon />,
    tabName: "Who_am_I.py",
    id: "whoAmI",
    // tabContent:
  },
  projects: {
    tabId: 2,
    tabIcon: <PythonIcon />,
    tabName: "Projects.java",
    id: "projects",
  },
  contact: {
    tabId: 3,
    tabIcon: <PythonIcon />,
    tabName: "Contact.cc",
    id: "contact",
  },
};

function getTabNameFromId(id) {
  const allTabNames = Object.keys(TabDirectory);
  for (let i = 0; i < allTabNames.length; i++) {
    const currentTabName = allTabNames[i];
    if (TabDirectory[currentTabName].tabId === id) {
      return currentTabName;
    }
  }
}
export { TabDirectory, getTabNameFromId };
