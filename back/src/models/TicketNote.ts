import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
  DataType
} from "sequelize-typescript";

import Contact from "./Contact";
import User from "./User";
import Ticket from "./Ticket";

@Table
class TicketNote extends Model<TicketNote> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  note: string;

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

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default TicketNote;
