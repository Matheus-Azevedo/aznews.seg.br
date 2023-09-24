const url = "http://localhost:3000/api/v1/status";

describe("GET /api/v1/status", () => {
  test('should return 200 and { status: "OK" }', async () => {
    const response = await fetch(url);
    expect(response.status).toBe(200);
  });
  test('should return a body { status: "OK", message: "API is running - CURSO.DEV is awesome!" }', async () => {
    const response = await fetch(url);
    const body = await response.json();
    expect(body).toEqual({
      status: "OK",
      message: "API is running - CURSO.DEV is awesome!",
    });
  });
});
