const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(request, response) {
  // TODO: Add your code here
  const movieId = request.params.movieId;
  const data = await service.list();
  
  if (movieId){
    response.json({data: await service.listByMovie(movieId)})
  } else {
    response.json({data});
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
};
