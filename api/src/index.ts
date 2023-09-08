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
server.use(morgan('dev'));
server.use(cors({
  origin: (origin,callback)=>{
    const ACCEPTED_ORIGINS = [
      `${process.env.FRONTEND}`
    ]
    if(origin && ACCEPTED_ORIGINS.includes(origin)){
      return callback(null,true)
    }
    if(!origin){
      return callback(null,true)
    }

    return callback(new Error('Not allowed by Cors'));
  }
}));
server.use(express.json());
// Conection
server.use('/',router)