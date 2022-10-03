import React, { useContext } from "react";
import AppContext from "../AppContext";

export default function Layout({ children }) {
  const authCtx = useContext(AppContext);
  const onLogoutClick = () => {
    authCtx.logout();
  };

  return (
    <div className="p-5">
      <nav>
        <button
          type="button"
          onClick={onLogoutClick}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </nav>
      {children}
    </div>
  );
}
