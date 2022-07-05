import React, { useState } from "react";

const NoResults = () => {
  //   const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // searchText(text);
  };

  return (
    <>
      <h1>No results...try another search</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="movie title or keyword"
            className="py-1 px-2 rounded-l-lg"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-400 py-1 px-2 rounded-r-lg"
          ></button>
        </form>
      </div>
    </>
  );
};

export default NoResults;
