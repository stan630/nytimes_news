import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        let {
          display_title,
          byline,
          critics_pick,
          summary_short,
          opening_date,
          link: { url },
        } = movie;
        if (critics_pick === 1) {
          critics_pick = "Yes";
        } else {
          critics_pick = "No";
        }
        return (
          <div
            key={display_title}
            className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto"
          >
            <h2 className="font-bold text-2xl mb-2 lg:text-4xl">
              {display_title}
            </h2>
            <p>
              <span className="font-bold"> Review by:</span> {byline}
            </p>
            <p>
              <span className="font-bold">Critic's Pick?</span> {critics_pick}
            </p>
            <p>
              <span className="font-bold">Summary:</span> {summary_short}
            </p>
            <p>
              <span className="font-bold">Opening:</span> {opening_date}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Read the New York Times Review of {display_title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
