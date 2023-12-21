import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsToMany,
  ForeignKey,
  BelongsTo,
  HasMany,
  DataType
} from "sequelize-typescript";
import Company from "./Company";
import Ticket from "./Ticket";
import TicketTag from "./TicketTag";

@Table
class Tag extends Model<Tag> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  color: string;

  @HasMany(() => TicketTag)
  ticketTags: TicketTag[];

  @BelongsToMany(() => Ticket, () => TicketTag)
  tickets: Ticket[];

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column({
    type: DataType.NUMBER,
  })
  kanban: number;
}

export default Tag;
