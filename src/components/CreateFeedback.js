import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { API } from "aws-amplify";
import { createFeedback } from "../graphql/mutations";
import { notificationError } from "../utils";
import * as animationData from "../images/high-five.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const CreateFeedback = ({ eventID, owner, eventName }) => {
  const { register, handleSubmit, errors, formState } = useForm();
  const [rating, setRating] = useState(0);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const onSubmit = async (data) => {
    data.rating = rating;
    if (rating === 0) {
      return notificationError("You must rate the event");
    }
    try {
      await API.graphql({
        query: createFeedback,
        variables: {
          input: {
            content: data.feedback,
            rating: data.rating,
            eventID: eventID,
            timestamp: Date.now(),
            owner: owner,
          },
        },
      });
      setIsSuccessfullySubmitted(true);
    } catch (error) {
      console.log("error submitting feedback", error);
    }
  };

  return (
    <div className="mt-5">
      {!isSuccessfullySubmitted && (
        <h1 className="text-xl">
          <span className="capitalize">{owner}</span> would like to know what
          you thought of {eventName}
        </h1>
      )}
      {isSuccessfullySubmitted ? (
        <div className=" flex flex-col my-16">
          <h2 className="text-xl font-medium text-center">
            Thank your for sharing your thoughts.{" "}
            <span className="capitalize">{owner} </span> appreciates your
            feedback!
          </h2>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : (
        <form className="max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="form-textarea shadow w-full my-3"
            name="feedback"
            placeholder="What did you think of the event?"
            ref={register({ required: true })}
            disabled={formState.isSubmitting || isSuccessfullySubmitted}
          />
          {errors.feedback && (
            <p style={{ color: "red" }}>This field is required</p>
          )}
          <Rating
            className="block"
            onChange={(value) => setRating(value)}
            initialRating={rating}
            emptySymbol={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            }
            fullSymbol={
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
            }
          />
          <button className="btn text-center block my-5" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateFeedback;
