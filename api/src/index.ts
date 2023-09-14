// Dev
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
// Router

import { router } from './routes';

// Server
export const server = express();
server.disable('x-powered-by');
server.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));
server.use(morgan('dev'));
server.use(express.json());
// Conection
server.use('/',router)