import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EventsProvider } from "./context/eventsContext";
import { Layout } from "./components/Layout";
import Event from "./pages/event";
import Landing from "./pages/landing";
import About from "./pages/about";
import Events from "./pages/events";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Landing} />
          <EventsProvider>
            <Route path="/events" component={Events} />
            <Route path="/event/:id" component={Event} />
            <Route path="/about" component={About} />
            <Route path="/not-found" component={NotFound} />
          </EventsProvider>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
