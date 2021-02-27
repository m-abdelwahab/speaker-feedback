import React, { useContext } from "react";
import EventsContext from "../context/eventsContext";
import { API } from "aws-amplify";
import { ACTION_TYPES } from "../actions";
import { deleteEvent } from "../graphql/mutations";
import { useHistory } from "react-router-dom";
import { notificationError } from "../utils";
import { confirmAlert } from "react-confirm-alert";

const DeleteEvent = ({ eventID }) => {
  const { eventsDispatch } = useContext(EventsContext);
  const history = useHistory();

  const handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="text-black bg-white p-10 rounded">
            <h1 className="text-2xl">Delete Event</h1>
            <p className="text-md my-5">
              Are you sure you want to delete this event? This action can't be
              undone!
            </p>
            <div className="flex justify-end">
              <button className="mr-5" onClick={onClose}>
                cancel
              </button>
              <button
                style={{ backgroundColor: "red" }}
                className="btn"
                onClick={() => removeEvent() && onClose()}
              >
                Delete
              </button>
            </div>
          </div>
        );
      },
    });
  };
  const removeEvent = async () => {
    try {
      eventsDispatch({ type: ACTION_TYPES.DELETE_EVENT });
      await API.graphql({
        query: deleteEvent,

        authMode: "AMAZON_COGNITO_USER_POOLS",
        variables: { input: { id: eventID } },
      });
      eventsDispatch({
        type: ACTION_TYPES.DELETE_EVENT_SUCCESS,
        value: eventID,
      });
      history.push("/events");
    } catch (err) {
      console.log("error deleting event:", err);
      notificationError("Error deleting event");
      eventsDispatch({
        type: ACTION_TYPES.DELETE_EVENT_ERROR,
        value: eventID,
      });
    }
  };
  return (
    <button className="btn" onClick={() => handleDelete()}>
      Delete Event
    </button>
  );
};

export default DeleteEvent;
