import { config } from "dotenv";
import { resolve } from 'path';

config(".env")

export const { MONGO_URI, PORT, SERVER_IP } = process.env

export const __dirname = resolve();
