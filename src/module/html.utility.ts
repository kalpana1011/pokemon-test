
import type { movie } from "./movie";

export const createHtml = (movies: movie[]) => {
  const moviesSection = document.getElementById("movies");

  if (moviesSection) {
    moviesSection.innerHTML = "";
  }

  movies.forEach((movie, i) => {
    const movieContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const removeButton = document.createElement("button");

    img.src = movie.Poster;
    img.alt = movie.Title;
    title.innerHTML = movie.Title;
    movieContainer.className = "movie";
    imgContainer.className = "image-container";
    removeButton.innerHTML = "Ta bort";

    if (movie.isSelected) {
      movieContainer.classList.add("selected");
    }

    removeButton.addEventListener("click", () => {
      movies.splice(i, 1);
      createHtml(movies);
    });

    movieContainer.addEventListener("click", () => {
      console.log(movie);
      movie.isSelected = !movie.isSelected;
      createHtml(movies);
    });

    imgContainer.appendChild(img);
    movieContainer.appendChild(title);
    movieContainer.appendChild(imgContainer);
    movieContainer.appendChild(removeButton);

    moviesSection?.appendChild(movieContainer);
  });
};
