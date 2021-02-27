import { useContext } from "react";
import UserContext from "../context/userContext";

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "`useUser` hook must be used within a `UserProvider` component"
    );
  }
  return context;
};
export default useUser;
