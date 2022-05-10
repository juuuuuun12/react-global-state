import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvieder = (props) => {
  const { children } = props;
  const contextName = "じゅん";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
