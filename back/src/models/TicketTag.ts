import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  ForeignKey,
  BelongsTo,
  DataType
} from "sequelize-typescript";
import Tag from "./Tag";
import Ticket from "./Ticket";

@Table({
  tableName: 'TicketTags'
})
class TicketTag extends Model<TicketTag> {
  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.STRING,
  })
  ticketId: string;

  @ForeignKey(() => Tag)
  @Column({
    type: DataType.STRING,
  })
  tagId: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @BelongsTo(() => Tag)
  tag: Tag;
}

export default TicketTag;
