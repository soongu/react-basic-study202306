import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // 더미함수를 넣으면 자동완성에 뜸 
});

export default AuthContext;