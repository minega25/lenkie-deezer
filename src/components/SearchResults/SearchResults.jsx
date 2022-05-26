import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import Spinner from "../Spinner";

const SearchResults = ({ data = [], isLoading = "idle" }) => {
  if (isLoading === "pending") {
    return <Spinner />;
  }
  return (
    <div className="flex flex-wrap">
      {data.map(({ picture_big, nb_album, nb_fan, name, id }) => {
        return (
          <ResultCard
            key={id}
            id={id}
            image={picture_big}
            imageAlt={name}
            name={name}
            fans={nb_fan}
            albums={nb_album}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
