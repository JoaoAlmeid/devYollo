import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  HasMany,
  AutoIncrement,
  Default,
  BeforeCreate,
  BelongsToMany,
  DataType
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";

import Contact from "./Contact";
import Message from "./Message";
import Queue from "./Queue";
import User from "./User";
import Whatsapp from "./Whatsapp";
import Company from "./Company";
import QueueOption from "./QueueOption";
import Tag from "./Tag";
import TicketTag from "./TicketTag";

@Table
class Ticket extends Model<Ticket> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    defaultValue: "pending"
  })
  status: string;

  @Column({
    type: DataType.NUMBER,
  })
  unreadMessages: number;

  @Column({
    type: DataType.STRING,
  })
  lastMessage: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
  })
  isGroup: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Contact)
  @Column({
    type: DataType.INTEGER,
  })
  contactId: number;

  @BelongsTo(() => Contact)
  contact: Contact;

  @ForeignKey(() => Whatsapp)
  @Column({
    type: DataType.INTEGER,
  })
  whatsappId: number;

  @BelongsTo(() => Whatsapp)
  whatsapp: Whatsapp;

  @ForeignKey(() => Queue)
  @Column({
    type: DataType.INTEGER,
  })
  queueId: number;

  @BelongsTo(() => Queue)
  queue: Queue;

  @Column({
    type: DataType.BOOLEAN,
  })
  chatbot: boolean;

  @ForeignKey(() => QueueOption)
  @Column({
    type: DataType.INTEGER,
  })
  queueOptionId: number;

  @BelongsTo(() => QueueOption)
  queueOption: QueueOption;

  @HasMany(() => Message)
  messages: Message[];

  @HasMany(() => TicketTag)
  ticketTags: TicketTag[];

  @BelongsToMany(() => Tag, () => TicketTag)
  tags: Tag[];

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @Default(uuidv4())
  @Column({
    type: DataType.STRING,
  })
  uuid: string;

  @BeforeCreate
  static setUUID(ticket: Ticket) {
    ticket.uuid = uuidv4();
  }
}

export default Ticket;
