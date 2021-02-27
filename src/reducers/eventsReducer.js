import { ACTION_TYPES } from "../actions";

const eventsReducer = (state, action) => {
  switch (action.type) {
    // GET EVENTS
    case ACTION_TYPES.GET_EVENTS:
      return { ...state, status: "loading" };

    case ACTION_TYPES.GET_EVENTS_SUCCESS:
      const events = action.value;
      return { ...state, events, status: "success" };

    case ACTION_TYPES.GET_EVENTS_ERROR:
      return { ...state, status: "error" };

    // CREATE EVENT
    case ACTION_TYPES.CREATE_EVENT:
      return { ...state, status: "adding event" };

    case ACTION_TYPES.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: [action.value, ...state.events],
        status: "event added",
      };

    case ACTION_TYPES.CREATE_EVENT_ERROR:
      return { ...state, status: "error creating event" };

    // DELETE EVENT
    case ACTION_TYPES.DELETE_EVENT:
      return { ...state, status: "deleting..." };

    case ACTION_TYPES.DELETE_EVENT_SUCCESS:
      const eventID = action.value;

      return {
        ...state,
        events: [...state.events.filter((event) => event.id !== eventID)],
        status: "success",
      };

    case ACTION_TYPES.DELETE_EVENT_ERROR:
      return { ...state, status: "error deleting event" };

    default:
      return state;
  }
};
export default eventsReducer;
