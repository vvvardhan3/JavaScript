const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backDrop = document.getElementById("backdrop");

const addCancelMovieButton = document.querySelector(".btn--passive");

const confirmMovieButton = document.querySelector(".btn--success");

const userInputs = addMovieModal.querySelectorAll("input");

const entryTextSection = document.getElementById('entry-text');

const movies = [];

const toggleBackDrop = () => {
  backDrop.classList.toggle("visible");
};

const toggleMovieodal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

const backDropClickHandler = () => {
  toggleMovieodal();
};

const CancelButtonClickHandler = () => {
  toggleMovieodal();
  clearUserInput();
};

const clearUserInput = () => {
    userInputs[0].value = '';
    userInputs[1].value = '';
    userInputs[2].value = '';
};

const confirmMovieButtonHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please Enter Right Information!");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  }

  movies.push(newMovie);
  console.log(movies);
  toggleMovieodal();
  clearUserInput();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
}


const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
      if (movie.id === movieId) {
        break;
      }
      movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
  };

const renderNewMovieElement = (id,title, imageurl, rating ) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `

        <div class = 'movie-element__image' >
            <img src='${imageurl} alt = ${title}'>
        </div>
        <div class = 'movie-element__info' >
            <h2>
            ${title}
            </h2>
            <p>
             ${rating} /5 Stars
            </p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}


startAddMovieButton.addEventListener("click", toggleMovieodal);
backDrop.addEventListener("click", backDropClickHandler);
addCancelMovieButton.addEventListener("click", CancelButtonClickHandler);
confirmMovieButton.addEventListener("click", confirmMovieButtonHandler);
