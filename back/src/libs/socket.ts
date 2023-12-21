import { Server as SocketIO } from "socket.io";
import { Server } from "http";
import AppError from "../errors/AppError";
import { logger } from "../utils/logger";
import User from "../models/User";

let io: SocketIO;

export const initIO = (httpServer: Server): SocketIO => {
    io = new SocketIO(httpServer, {
        cors: {
            origin: process.env.FRONTEND_URL
        }
    });
    
    io.on("connection", async socket => {
        logger.info("Clinte Conectado!");
        const { userId }: any = socket.handshake.query;

        if (userId && userId !== "undefined" && userId !== "null") {
            const user = await User.findByPk(userId);
            if (user) {
                user.online = true;
                await user.save();
            }
        }

        socket.on("joinChatBox", (ticketId: string) => {
            logger.info("Um cliente entrou em um canal de tickets");
            socket.join(ticketId);
        });

        socket.on("joinNotification", () => {
            logger.info("Um cliente entrou em um canal de notificações");
            socket.join("notification");
        });

        socket.on("joinTickets", (status: string) => {
            logger.info(`Um cliente entrou para ${status} canais de tickets`);
            socket.join("notification");
        });
    });
    return io;
};

export const getIO = (): SocketIO => {
    if (!io) {
        throw new AppError("Erro: Socket IO não foi inicializado", 403);
    }
    return io;
}