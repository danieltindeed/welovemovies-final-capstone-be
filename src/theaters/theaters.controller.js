const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(request, response) {
  const movieId = request.params.movieId;
  if (movieId) {
    response.status(200).json({data: await service.theatersByMovie(movieId)})
  } else {
    response.status(200).json({data: await service.list()})
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
};