const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");


beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});


test("GET /api/users to get all users", async () => {
  const register = await request(server)
  .post('/api/auth/register')
  .send({username: "testname", password: "password"})
  const login = await request(server)
  .post('/api/auth/login')
  .send({username: 'testname', password:"password"})
  const res = await request(server)
  .get('/api/users')
  .set('authorization', login.body.token)
  expect(res.status).toBe(200)
  expect(res.body[0]).toHaveProperty('username')

});