const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

it("Gets the '/' endpoint", async () => {
  const res = await request.get('/api/analyst').send();

  expect(res.statusCode).toBe(200);
});
