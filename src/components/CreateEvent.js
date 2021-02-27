import React, { useState } from "react";
import ReactModal from "react-modal";
import { useForm } from "react-hook-form";
import { API } from "aws-amplify";

import { createEvent } from "../graphql/mutations";
import { ACTION_TYPES } from "../actions";

ReactModal.setAppElement("#create-event");

const CreateEvent = ({ dispatch }) => {
  const { register, handleSubmit, errors } = useForm();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onSubmit = async (data) => {
    try {
      const event = {
        name: data.eventName,
        description: data.eventDescription,
        timestamp: Date.now(),
      };
      dispatch({
        type: ACTION_TYPES.CREATE_EVENT,
      });
      const newEvent = await API.graphql({
        query: createEvent,
        variables: { input: event },

        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      dispatch({
        type: ACTION_TYPES.CREATE_EVENT_SUCCESS,

        value: newEvent.data.createEvent,
      });
      closeModal();
    } catch (err) {
      console.log("error creating event:", err);
      dispatch({
        type: ACTION_TYPES.CREATE_EVENT_ERROR,
      });
    }
  };

  return (
    <>
      <ReactModal
        className="mx-auto mt-64 bg-white  rounded-lg m-20 md:w-1/2 max-w-md p-5 shadow-lg"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create Event Modal"
        overlayClassName="bg-gray-800 bg-opacity-75  bottom-0 top-0 left-0 right-0 fixed"
      >
        <h1 className="font-medium text-lg">Create A New Event</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col my-5">
          <input
            name="eventName"
            className="form-input shadow mb-5"
            placeholder="Pick a name for your event"
            ref={register({ required: true })}
            type="text"
          />
          {errors.eventName && (
            <p style={{ color: "red" }}>
              You must provide a name for your event
            </p>
          )}
          <input
            name="eventDescription"
            className="form-input shadow mb-5"
            placeholder="Add a description for your event"
            ref={register({ required: true })}
            type="text"
          />
          {errors.eventDescription && (
            <p style={{ color: "red" }}>
              Having a description will allow you to provide context
            </p>
          )}
          <button className="ml-auto btn" type="submit">
            Create
          </button>
        </form>
      </ReactModal>
      <button className="btn" onClick={openModal}>
        Create Event +
      </button>
    </>
  );
};

export default CreateEvent;
