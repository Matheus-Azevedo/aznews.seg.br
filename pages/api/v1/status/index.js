import database from "infra/database";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const queryDatabaseVersionResult = await database.query({
    text: "SHOW server_version;",
  });

  const queryMaxConnectionsResult = await database.query({
    text: "SHOW max_connections;",
  });

  const databaseName = process.env.POSTGRES_DB;
  const queryOpenedConnectionsResult = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const databaseVersion = queryDatabaseVersionResult.rows[0];
  const maxConnections = queryMaxConnectionsResult.rows[0].max_connections;
  const openedConnections = queryOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion.server_version,
        max_connections: parseInt(maxConnections, 10),
        openedConnections: openedConnections,
      },
    },
  });
}

export default status;
