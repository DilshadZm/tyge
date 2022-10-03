import React, { useState } from "react";

const AppContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (profile) => { },
  logout: () => { },
});

export const AppContextProvider = (props) => {
  const profileString = localStorage.getItem("supplier_profile");
  let initialProfile = null;
  if (profileString)
    initialProfile = JSON.parse(profileString);
  const [profile, setProfile] = useState(initialProfile);

  const userIsLoggedIn = !!profile?.token;

  const loginHandler = (userProfile) => {
    setProfile(userProfile);
    localStorage.setItem("supplier_profile", JSON.stringify(userProfile));
  };

  const logoutHandler = () => {
    setProfile(null);
    localStorage.removeItem("supplier_profile");
  };


  const contextValue = {
    profile: profile,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;