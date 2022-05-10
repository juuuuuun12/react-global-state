import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvieder = (props) => {
  const { children } = props;

  const [userInfo, SetUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, SetUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
