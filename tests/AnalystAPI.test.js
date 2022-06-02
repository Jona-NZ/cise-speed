const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

it("Gets the '/' endpoint", async () => {
  const res = await supertest(app).get('/api/analyst').send();

  expect(res.status).toBe(200);
});
