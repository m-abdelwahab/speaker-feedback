import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EventsProvider } from "./context/eventsContext";
import { Layout } from "./components/Layout";
import Event from "./pages/event";
import Landing from "./pages/landing";
import About from "./pages/about";
import Events from "./pages/events";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Landing} />
          <EventsProvider>
            <Route path="/events" component={Events} />
            <Route path="/event/:id" component={Event} />
          </EventsProvider>
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
