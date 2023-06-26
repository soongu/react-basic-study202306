import React, { useState, useEffect, useContext } from "react";

import Login from "./components/SideEffect/Login/Login";
import Home from "./components/SideEffect/Home/Home";
import MainHeader from "./components/SideEffect/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./store/auth-context";

function App() {
 
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
