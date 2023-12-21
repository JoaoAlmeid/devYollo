import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  BelongsTo,
  ForeignKey,
  BeforeCreate,
  Default,
  DataType
} from "sequelize-typescript";

import { v4 as uuidv4 } from "uuid";

import ChatMessage from "./ChatMessage";
import ChatUser from "./ChatUser";
import Company from "./Company";
import User from "./User";

@Table({ tableName: "Chats" })
class Chat extends Model<Chat> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Default(uuidv4())
  @Column({
    type: DataType.STRING,
  })
  uuid: string;

  @Column({
    type: DataType.STRING,
  })({ defaultValue: "" })
  title: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  ownerId: number;

  @Column({
    type: DataType.STRING,
  })({ defaultValue: "" })
  lastMessage: string;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Company)
  company: Company;

  @BelongsTo(() => User)
  owner: User;

  @HasMany(() => ChatUser)
  users: ChatUser[];

  @HasMany(() => ChatMessage)
  messages: ChatMessage[];

  @BeforeCreate
  static setUUID(chat: Chat) {
    chat.uuid = uuidv4();
  }
}

export default Chat;
