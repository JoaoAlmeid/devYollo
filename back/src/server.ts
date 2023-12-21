import dotenv from 'dotenv'
import GracefulShutdown from 'http-graceful-shutdown'; // Gerencia o desligamento seguro do server
import app from './app'

dotenv.config({ path: '.env' })
require('checkenv').check()

const { PORT } = process.env;

const server = app.listen(PORT, async () => {
    console.log(`Server Success! Port: ${PORT}`)
});

GracefulShutdown(server);