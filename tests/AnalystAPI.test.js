const { server: app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');
const connectDB = require('../config/db');

beforeAll(() => {
  return connectDB();
});

afterAll(() => {
  app.close();
  return mongoose.connection.close();
});

it("Gets the '/' endpoint", async () => {
  const res = await request.get('/api/analyst').send();

  expect(res.statusCode).toBe(200);
});
