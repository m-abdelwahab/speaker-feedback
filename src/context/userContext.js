import React, { useEffect, createContext, useState } from "react";
import { Auth } from "aws-amplify";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch(() => setUser(null));
  }, []);

  const logout = () =>
    Auth.signOut().then((data) => {
      setUser(null);
      return data;
    });

  const values = React.useMemo(() => ({ user, logout }), [user]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
export default UserContext;
