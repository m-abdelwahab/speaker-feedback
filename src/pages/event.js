import React, { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import Skeleton from "react-loading-skeleton";
import { getEvent, listFeedbacks } from "../graphql/queries";
import DeleteEvent from "../components/DeleteEvent";
import Feedback from "../components/Feedback";
import CreateFeedback from "../components/CreateFeedback";
import ShareEvent from "../components/ShareEvent";
import { useHistory, useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  const eventID = id;
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    async function checkUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    const fetchEvent = async () => {
      try {
        const eventData = await API.graphql({
          query: getEvent,
          variables: { id: eventID },
        });
        if (!eventData.data.getEvent) {
          history.push("/not-found");
        }
        setEvent(eventData.data.getEvent);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
      setIsLoading(false);
    };

    const fetchFeedbacks = async () => {
      try {
        const feedbacksData = await API.graphql({
          query: listFeedbacks,
          authMode: "AMAZON_COGNITO_USER_POOLS",
          variables: {
            filter: { eventID: { eq: eventID } },
            sortDirection: "DESC",
          },
        });
        setFeedbacks(feedbacksData.data.listFeedbacks.items);
        console.log(feedbacks);
      } catch (error) {
        console.log("Error fetching feedback", error);
      }
    };
    fetchEvent();
    checkUser();
    fetchFeedbacks();
  }, []);

  return (
    <section className="container mx-auto px-12 md:px-24 pt-12">
      {isLoading ? (
        <div>
          <h1 className="text-xl font-medium">Loading Event...</h1>
          <div className="max-w-md">
            <Skeleton height={50} />
            <Skeleton height={25} />
          </div>
          <Skeleton height={500} />
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-medium">{event?.name} </h1>
          <p className="text-lg">{event?.description}</p>
          {user ? (
            <div className="h-auto pb-24">
              {feedbacks.length === 0 ? (
                <div>
                  <p className="mt-5">
                    You haven't received any feedback yet for this event! Share
                    the link
                  </p>
                  <ShareEvent
                    url={`${process.env.REACT_APP_URL}/event/${event.id}`}
                  />
                </div>
              ) : (
                <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {feedbacks.map(({ id, content, rating, createdAt }) => (
                    <Feedback
                      key={id}
                      content={content}
                      rating={rating}
                      createdAt={createdAt}
                    />
                  ))}
                </div>
              )}
              <DeleteEvent eventID={event.id} />
            </div>
          ) : (
            <CreateFeedback
              eventID={event.id}
              eventName={event.name}
              owner={event.owner}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Event;
