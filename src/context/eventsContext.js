import React, { useEffect, useReducer, createContext } from "react";
import { listEvents } from "../graphql/queries";
import { API } from "aws-amplify";
import { ACTION_TYPES } from "../actions";
import { eventsReducer } from "../reducers";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

const initialState = {
  events: [],
  status: "idle",
};

const EventsContext = createContext(initialState);

export const EventsProvider = ({ children }) => {
  const [eventsState, eventsDispatch] = useReducer(eventsReducer, initialState);
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
    const fetchEvents = async () => {
      try {
        eventsDispatch({ type: ACTION_TYPES.GET_EVENTS });
        const eventData = await API.graphql({
          query: listEvents,
          authMode: "AMAZON_COGNITO_USER_POOLS",
          variables: { sortDirection: "DESC" },
        });

        const events = eventData.data.listEvents.items;
        eventsDispatch({
          type: ACTION_TYPES.GET_EVENTS_SUCCESS,
          value: events,
        });
      } catch (err) {
        console.log("error fetching events", err);
        eventsDispatch({ type: ACTION_TYPES.GET_EVENTS_ERROR });
      }
    };
    return fetchEvents();
  }, [authState, user]);

  return (
    <EventsContext.Provider value={{ eventsState, eventsDispatch }}>
      {children}
    </EventsContext.Provider>
  );
};

export default EventsContext;
