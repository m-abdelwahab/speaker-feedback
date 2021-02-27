import React from "react";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";
import { getAverage } from "../utils";

const Event = ({ id, name, description, createdAt, feedback }) => {
  const ratings = feedback?.map((item) => item?.rating);

  return (
    <Link
      to={`/event/${id}`}
      className="rounded shadow hover:text-red-600 font-medium transition duration-100 ease-in-out  p-5 mr-5 transform  hover:scale-105"
    >
      <p className="text-2xl font-medium"> {name}</p>
      <p className="text-lg my-3">{description}</p>
      <p className="text-sm">{format(parseISO(createdAt), "LLL do yyyy")}</p>
      <p className="my-3">
        {ratings && (
          <span className="flex items-center">
            {getAverage(ratings) && (
              <>
                {getAverage(ratings)}
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </>
            )}
          </span>
        )}
      </p>
    </Link>
  );
};

export default Event;
