import React, { useState } from "react";

function LiftingState() {
  // const [Display, setDisplay] = useState(false);
  const [scifi, setScifi] = useState("science-fiction");
  const [drama, setDrama] = useState("drama");
  const [movieList, setMovieList] = useState([
    { title: "Avatar", genre: "science-fiction" },
    { title: "Black Swan", genre: "drama" },
    { title: "Inception", genre: "science-fiction" },
    { title: "Moonlight", genre: "drama" },
  ]);

  
  const displayDrama = () => {
    setDrama(!drama);
  };

  const displayScifi = () => {
    setScifi(!scifi);
  };
  return (
    <div>
      <h3>All movies</h3>
      <button onClick={displayDrama}>
        Display Drama Movies:
        {drama ? (
          <div>
            <hr />
            {movieList
              .filter((movie) => movie.genre === "drama")
              .map((movie) => (
                <div key={movie.title}>
                  {movie.title} ({movie.genre})
                </div>
              ))}
          </div>
        ) : null}
      </button>
      <button onClick={displayScifi}>
        Display Sci-fi Movies:
        {scifi ? (
          <div>
            <hr />
            {movieList
              .filter((movie) => movie.genre === "science-fiction")
              .map((movie) => (
                <div key={movie.title}>
                  {movie.title} ({movie.genre})
                </div>
              ))}
          </div>
        ) : null}
      </button>
    </div>
  );
}

export default LiftingState;
