import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  DataType,
  PrimaryKey,
  Default,
  BelongsTo,
  ForeignKey
} from "sequelize-typescript";
import Contact from "./Contact";
import Ticket from "./Ticket";
import Company from "./Company";
import Queue from "./Queue";

@Table
class Message extends Model<Message> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  remoteJid: string;

  @Column({
    type: DataType.STRING,
  })
  participant: string;

  @Column({
    type: DataType.STRING,
  })
  dataJson: string;

  @Default(0)
  @Column({
    type: DataType.NUMBER,
  })
  ack: number;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
  })
  read: boolean;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
  })
  fromMe: boolean;

  @Column({
    type: DataType.TEXT,
  })
  body: string;

  @Column({
    type: DataType.STRING,
  })
  get mediaUrl(): string | null {
    if (this.getDataValue("mediaUrl")) {
      return `${process.env.BACKEND_URL}${process.env.PROXY_PORT ?`:${process.env.PROXY_PORT}`:""}/public/${this.getDataValue("mediaUrl")}`;
    }
    return null;
  }

  @Column({
    type: DataType.STRING,
  })
  mediaType: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
  })
  isDeleted: boolean;

  @CreatedAt
  @Column({
    type: DataType.DATE(6),
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE(6),
  })
  updatedAt: Date;

  @ForeignKey(() => Message)
  @Column({
    type: DataType.STRING,
  })
  quotedMsgId: string;

  @BelongsTo(() => Message, "quotedMsgId")
  quotedMsg: Message;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @ForeignKey(() => Contact)
  @Column({
    type: DataType.INTEGER,
  })
  contactId: number;

  @BelongsTo(() => Contact, "contactId")
  contact: Contact;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @ForeignKey(() => Queue)
  @Column({
    type: DataType.INTEGER,
  })
  queueId: number;

  @BelongsTo(() => Queue)
  queue: Queue;
}

export default Message;
