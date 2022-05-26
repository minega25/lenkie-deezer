import React from "react";
import { Link } from "@reach/router";

let formatter = Intl.NumberFormat("en", { notation: "compact" });

const ArtistProfile = ({
  name = "",
  image = "",
  imageAlt = "",
  fans = 0,
  albums = 0,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md m-3 max-w-[70%]">
      <img className="min-w-full rounded-t-lg" src={image} alt={imageAlt} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>

        <div className="flex justify-between p-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {formatter.format(fans)} Fans
          </span>
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {albums} Albums
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;

