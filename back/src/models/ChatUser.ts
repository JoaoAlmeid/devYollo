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

@Table({ tableName: "ChatUsers" })
class ChatUser extends Model<ChatUser> {
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
  userId: number;

  @Column({
    type: DataType.NUMBER,
  })
  unreads: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Chat)
  chat: Chat;

  @BelongsTo(() => User)
  user: User;
}

export default ChatUser;
