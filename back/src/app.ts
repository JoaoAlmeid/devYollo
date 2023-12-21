require('dotenv').config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as Sentry from "@sentry/node";
import express from 'express';

import "./database";
import uploadConfig from './config/upload';
import AppError from './errors/AppError';
import { logger } from './utils/logger';

const app = express();

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    debug: true,

    // Monitoramento de Performace
    tracesSampleRate: 1.0, // Capture 100% of the transactions
    profilesSampleRate: 1.0, // Definir a taxa de amostragem de perfil

    integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Sentry.Integrations.Express({ app }),
    ],
})

app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
  );
app.use(cookieParser());
app.use(express.json());
app.use("/public", express.static(uploadConfig.directory));


app.use(async (err, req, res, next) => {
    if (err instanceof AppError) {
        logger.warn(err);
        return res.status(err.statusCode).json({ error: err.message });
    }

    logger.error(err);
    return res.status(500).json({ error: "Erro no servidor interno!" });
});

export default app;