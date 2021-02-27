import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EventsProvider } from "./context/eventsContext";
import { UserProvider } from "./context/userContext";
import { Layout } from "./components/Layout";
import { Event, Events, About, NotFound, Landing } from "./pages";

function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <EventsProvider>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/events" component={Events} />
              <Route path="/about" component={About} />
              <Route path="/event/:id" component={Event} />
              <Route component={NotFound} />
            </Switch>
          </EventsProvider>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
