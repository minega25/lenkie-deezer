import React from "react";

function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}

const formatDuration = (durationInSeconds) => {
  var minutes = Math.floor(durationInSeconds / 60);
  var seconds = durationInSeconds - minutes * 60;

  return str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
};

const TopTracks = ({ topTracks = [] }) => {
  return (
    <div>
      <h1 className="text-2xl">Top Tracks</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {topTracks.map(({ title, duration }, index) => {
              return (
                <tr className="bg-white border-b bg-white-800 " key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black-900 whitespace-nowrap"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{title}</td>
                  <td className="px-6 py-4">{formatDuration(duration)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopTracks;

