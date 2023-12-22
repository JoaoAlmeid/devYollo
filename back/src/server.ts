import dotenv from 'dotenv'
import { client } from "./libs/cache"
import GracefulShutdown from 'http-graceful-shutdown'; // Gerencia o desligamento seguro do server
import app from './app';

dotenv.config({ path: '.env' })
require('checkenv').check()

const { PORT } = process.env;

 const server = app.listen(PORT, async () => {
    await client.connect();
    console.log(`Server Success! Port: ${PORT}`)
});

GracefulShutdown(server);