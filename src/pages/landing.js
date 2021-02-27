import React from "react";
import Hero from "../components/Landing/Hero";
import { useHistory } from "react-router-dom";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

const Landing = () => {
  const history = useHistory();

  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  if (authState === AuthState.SignedIn && user) return history.push("/events");

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Landing;
