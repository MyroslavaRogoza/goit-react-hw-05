import React from "react";

const MoviesPage = ({ findMovie }) => {
  function handleSubmit(evt) {
    const movieTitle = evt.currentTarget.elements.userInput.value.trim();
    findMovie(movieTitle);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="userInput" />
      <button type="submit">Seach</button>
    </form>
  );
};

export default MoviesPage;
