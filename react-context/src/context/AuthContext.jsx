import { createContext, useState } from "react";

const AuthContext = createContext();
const initialAuth = false; // Default authentication state

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const handleAuthChange = () => setAuth(!auth);

  const data = {
    auth,
    handleAuthChange,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContext;
