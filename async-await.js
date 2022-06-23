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

//las siguientes dos funciones devuelven un objeto promesa
//la diferencia con el ejer anterior es simplificar la forma de escribir, metodo try/catch.
async function getMovieById(id) {
  try {
    const movie = await moviesDB.find((movie2) => movie2.id === id);
    if (!movie) throw new Error("Movie does not exist");
    return movie;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getActorById(id) {
  try {
    const actor = await actorsDB.find((actor) => actor.id === id);
    if (!actor) throw new Error("Actor does not exist");
    return actor;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function getCompleteMovieById(movieId) {
  try {
    const movie = await getMovieById(movieId);
    const actor = await getActorById(movie.mainActor);
    console.log(
      `La película seleccionada es ${movie.title}, y su actor principal es ${actor.name}`
    );
  } catch (error) {
    throw new Error(error.message);
  }
}

getCompleteMovieById(1);
getCompleteMovieById(2);
