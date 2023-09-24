function status(_request, response) {
  response.status(200).json({
    status: "OK",
    message: "API is running - CURSO.DEV is awesome!",
  });
}

export default status;
