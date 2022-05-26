import React from "react";

const AlbumCard = ({ title, cover_medium, release_date }) => {
  return (
    <div className="max-w-xs min-w-[30%] bg-white rounded-lg border border-gray-200 shadow-md m-2">
      <a href="#">
        <img
          className="rounded-t-lg max-w-xs"
          src={cover_medium}
          alt=""
          style={{
            width: "-webkit-fill-available",
          }}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{release_date}</p>
      </div>
    </div>
  );
};

export default AlbumCard;

