// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import morgan from "morgan";
import cookieParser from "cookie-parser";
import http from 'http';

//* Routers
import connection from './config/mongodbConnection';
import socket from './utils/socketio';
import router from './router/router';
import adminRouter from './router/admin';
import doctorRouter from './router/doctor';
import userRouter from './router/user';
import conversationRouter from './router/conversation';
import messageRouter from './router/message';


const app: Express = express();
const port = process.env.PORT || 3000;
dotenv.config();

/* connect mongodb */
connection();

/* Use Middlewares */
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
  origin: [
    process.env.DOCTOR_URL||'',
    process.env.USER_URL||'',
    process.env.ADMIN_URL||'',
  ],
}),);

/* API Routes */
app.use('/api', router);
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);
app.use('/api/conversation', conversationRouter);
app.use('/api/message', messageRouter);


/* Start Server */
app.use((req, res) => {
  res.send('Hey thats a 404');
});

/*app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});*/

/* socket io */

 const server = http.createServer(app);
 socket(server);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});