import React, { useContext } from "react";
import Event from "../components/Event";
import CreateEvent from "../components/CreateEvent";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import EventsContext from "../context/eventsContext";
import Skeleton from "react-loading-skeleton";

const Events = () => {
  const { eventsState, eventsDispatch } = useContext(EventsContext);
  const { events, status } = eventsState;

  return (
    <AmplifyAuthenticator>
      <div className="mx-auto container px-24 pt-12">
        <h1 className="text-2xl font-medium tracking-wider">Your Events</h1>
        {status === "loading" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
            <Skeleton height={200} />
            <Skeleton height={200} />
            <Skeleton height={200} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 h-auto">
            {events.length === 0 ? (
              <h1>You don't have any events, create one now</h1>
            ) : (
              events?.map((event) => {
                return (
                  <Event
                    key={event.id}
                    name={event.name}
                    id={event.id}
                    description={event.description}
                    createdAt={event.createdAt}
                    feedback={event.feedback?.items}
                  />
                );
              })
            )}
          </div>
        )}
        <CreateEvent dispatch={eventsDispatch} />
      </div>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
        ]}
      />
    </AmplifyAuthenticator>
  );
};

export default Events;
