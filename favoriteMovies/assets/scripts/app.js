const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backDrop = document.getElementById("backdrop");

const addCancelMovieButton = document.querySelector(".btn--passive");

const confirmMovieButton = document.querySelector(".btn--success");

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
};

const confirmMovieButtonHandler = () => {};

startAddMovieButton.addEventListener("click", toggleMovieodal);
backDrop.addEventListener("click", backDropClickHandler);
addCancelMovieButton.addEventListener("click", CancelButtonClickHandler);
confirmMovieButton.addEventListener("click", confirmMovieButtonHandler);
