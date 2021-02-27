import React from "react";
import { useHistory } from "react-router-dom";
import useUser from "../hooks/useUser";
import Hero from "../components/Landing/Hero";

const Landing = () => {
  const history = useHistory();
  const { user } = useUser();
  if (user) history.push("/events");

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Landing;
