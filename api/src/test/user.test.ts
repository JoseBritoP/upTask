import { server } from '../index';
import request from 'supertest';

describe('Auth /register',()=>{
  describe('Success case',()=>{});
  describe('Error case',()=>{
    xtest("should respond with a message in case the username already use",async()=>{
      const newUser = {
        username:"pepito",
        email:"donpepitotest@gmail.com",
        password:"pass123"
      };
      const response = await request(server).post("/api/auth/register").send(newUser);
      expect(response.status).toBe(400)
      expect(response.clientError).toBe(true);
      expect(response.body.error).toBe(`Username already in use`)
    });
    xtest("should respond with a message in case the email already use",async()=>{
      const newUser = {
        username:"pepitoTest",
        email:"donpepito@gmail.com",
        password:"pass123"
      };
      const response = await request(server).post("/api/auth/register").send(newUser);
      expect(response.status).toBe(400)
      expect(response.clientError).toBe(true);
      expect(response.body.error).toBe(`Email already in use`)
    });
    test("should respond with a message in case the email or password missing",async ()=>{
      const newUsers = [
        {
          username:"test"
        },
        {
          email: "email@gmail.com"
        },
        {
          password: "password123"
        },
        {
          username:"test",
          password: "password123"
        },
        {
          username:"test",
          email: "email@gmail.com"
        },
        {}
      ];

      const newUsersTesting = newUsers.map(async(newUser)=>{
        const response = await request(server).post('/api/auth/register').send(newUser);
        const message = response.body.error.issues.map((prop:any)=> prop.message);
        const onlyMessageText = message[0]
        expect(response.status).toBe(400);
        expect(response.body.error).toMatchObject({
          issues: expect.any(Array),
          name: 'ZodError'
        });
        expect(onlyMessageText).toBeDefined();
      });
      await Promise.all(newUsersTesting)
    
    });
    test("should respond with a message in case the email or password format are invalid",async()=>{
      const newUsers = [
        {
          email: "correo@@@mail.com",
          password: "passwordTesting1",
        },
        {
          email: "correo@gmail.com",
          password: "password"
        },
        {
          email: "correo@gmail.com",
          password: 2
        },
        {
          email: "correo@gmail.com",
          password: "12345"
        }
      ];

      const newUsersTesting = newUsers.map(async(newUser)=>{
        const response = await request(server).post("/api/auth/register").send(newUser);
        // console.log(response.body.error.issues.map((prop:any)=> prop.message))
        // console.log(response.body.error.issues.map((prop:any)=> prop.message))
        const message = response.body.error.issues.map((prop:any)=> prop.message);
        const onlyMessageText = message[0]
        // console.log(onlyMessageText)
        expect(response.status).toBe(400);
        expect(response.body.error).toMatchObject({
          issues:expect.any(Array),
          name: 'ZodError'
        });
        expect(onlyMessageText).toBeDefined();
      });
      await Promise.all(newUsersTesting);
    });
  });
})