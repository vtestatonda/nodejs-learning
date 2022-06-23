const moviesDB = [
  { id: 1, title: "Nueve Reinas", mainActor: 2 },
  { id: 2, title: "El Secreto de sus ojos", mainActor: 1 },
  { id: 3, title: "Cinema Paradiso", mainActor: 3 },
];
const actorsDB = [
  { id: 1, name: "Guillermo Francella" },
  { id: 2, name: "Ricardo Darín" },
  { id: 3, name: "José Pérez" },
];
//anteriormente estamos simulando una base de datos.

function getMovieById(id) {
  return new Promise((resolve, reject) => {
    const movie = moviesDB.find((movie) => movie.id === id);
    if (!movie) reject(new Error("Movie does not exist"));
    resolve(movie);
  });
}
function getActorById(id) {
  return new Promise((resolve, reject) => {
    const actor = actorsDB.find((actor) => actor.id === id);
    if (!actor) reject(new Error("Actor does not exist"));
    resolve(actor);
  });
}
function getCompleteMovieById(movieId) {
  //. then .catch .finally es uno de los 3 metodos vistos en teoria.
  getMovieById(movieId)
    .then((movie) => {
      getActorById(movie.mainActor).then((actor) => {
        console.log(
          `La película elegida es ${movie.title}, y su actor principal es ${actor.name}`
        );
      });
    })
    //esto es un poco la desventaja es el promise help que se empieza a ir mucho hacia la derecha y la lectura del codigo es engorrosa.
    .catch((error) => console.log(error))
    .finally(() => console.log("Operation finished"));
}
getCompleteMovieById(2);
