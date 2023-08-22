import { createContext, useState } from "react"

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types, no-unused-vars
export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
