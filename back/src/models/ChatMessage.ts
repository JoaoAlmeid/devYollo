import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
  DataType
} from "sequelize-typescript";
import User from "./User";
import Chat from "./Chat";

@Table({ tableName: "ChatMessages" })
class ChatMessage extends Model<ChatMessage> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Chat)
  @Column({
    type: DataType.INTEGER,
  })
  chatId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  senderId: number;

  @Column({
    type: DataType.STRING,
  })({ defaultValue: "" })
  message: string;

  @Column({
    type: DataType.STRING,
  })
  mediaPath: string;

  @Column({
    type: DataType.STRING,
  })
  mediaName: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Chat)
  chat: Chat;

  @BelongsTo(() => User)
  sender: User;
}

export default ChatMessage;
