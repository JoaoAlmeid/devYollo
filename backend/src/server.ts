import { initIO } from "./libs/socket";
import app from "./app";
import { logger } from "./utils/logger";
import { StartAllWhatsAppsSessions } from "./services/WbotServices/StartAllWhatsAppsSessions";
import Company from "./models/Company";
import { startQueueProcess } from "./queues";

require('dotenv').config();
const gracefulShutdown = require('http-graceful-shutdown')  // Gerencia o desligamento seguro do server
const port = process.env.PORT

const server = app.listen(port || 3007, async () => {
  const companies = await Company.findAll();
  const allPromises: any[] = [];
  companies.map(async c => {
    const promise = StartAllWhatsAppsSessions(c.id);
    allPromises.push(promise);
  });

  Promise.all(allPromises).then(() => {
    startQueueProcess();
  });
  logger.info(`Server started on port: ${port}`);
});

initIO(server);
gracefulShutdown(server);
