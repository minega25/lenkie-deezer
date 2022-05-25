import React from "react";
import { Link } from "@reach/router";

let formatter = Intl.NumberFormat("en", { notation: "compact" });

const ResultCard = ({
  name = "",
  image = "",
  imageAlt = "",
  fans = 0,
  albums = 0,
  id,
}) => {
  return (
    <div className=" bg-white rounded-lg border border-gray-200 shadow-md m-3">
      <Link to={`/artist/${id}`}>
        <img className="min-w-full rounded-t-lg" src={image} alt={imageAlt} />
      </Link>
      <div className="p-5">
        <Link to={`/artist/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </Link>
        <div className="flex justify-between p-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {formatter.format(fans)} Fans
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {albums} Albums
          </span>
        </div>

        <Link
          to={`/artist/${id}`}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View Artist
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ResultCard;

