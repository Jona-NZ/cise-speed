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

it('GET admin / endpoint', async () => {
  const res = await request.get('/api/admin').send();
  expect(res.statusCode).toBe(200);
});

it('GET analyst / endpoint', async () => {
  const res = await request.get('/api/analyst').send();
  expect(res.statusCode).toBe(200);
});

it('GET articles / endpoint', async () => {
  const res = await request.get('/api/articles').send();
  expect(res.statusCode).toBe(200);
});
