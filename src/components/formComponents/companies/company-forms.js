import React from "react";
import { useState } from "react";
import Branch from "./branch";
import Department from "./department";
import General from "./general";
const Forms = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  return (
    <div className="Tabs mt-5">
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
          class="mr-2"
        >
          <a
            href="#"
            aria-current="page"
            class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"
          >
            General
          </a>
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
          class="mr-2"
        >
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 active dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Department
          </a>
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
          class="mr-2"
        >
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Branch
          </a>
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? (
          <General />
        ) : activeTab === "tab2" ? (
          <Department />
        ) : activeTab === "tab2" ? (
          <Branch />
        ) : (
          <Branch />
        )}
      </div>
    </div>
  );
};
export default Forms;
