import express from "express";
import Routes from "./routes/index.js";
import { PORT, SERVER_IP, __dirname } from './constants/index.js';

const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/client'));
app.use("/upload",express.static(__dirname + '/uploads'));

app.listen(PORT, () => console.log(`Server running on http://${SERVER_IP}:${PORT}`))

app.get('/', (req, res) =>  res.sendFile('/index.html'));
app.use("/api", Routes)

