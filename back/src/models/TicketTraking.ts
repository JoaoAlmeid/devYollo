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

import Company from "./Company";
import User from "./User";
import Ticket from "./Ticket";
import Whatsapp from "./Whatsapp";

@Table({
  tableName: "TicketTraking"
})
class TicketTraking extends Model<TicketTraking> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @ForeignKey(() => Whatsapp)
  @Column({
    type: DataType.INTEGER,
  })
  whatsappId: number;

  @BelongsTo(() => Whatsapp)
  whatsapp: Whatsapp;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  rated: boolean;

  @BelongsTo(() => User)
  user: User;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({
    type: DataType.DATE,
  })
  startedAt: Date;

  @Column({
    type: DataType.DATE,
  })
  queuedAt: Date;

  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;

  @Column({
    type: DataType.DATE,
  })
  ratingAt: Date;
}

export default TicketTraking;
