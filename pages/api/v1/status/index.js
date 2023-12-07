import database from "infra/database";

async function status(_request, response) {
  const result = await database.query("SELECT 1 + 1 AS solution;");
  console.log(result.rows[0]);
  response.status(200).json({
    status: "OK",
    message: "API is running - CURSO.DEV is awesome!",
  });
}

export default status;
