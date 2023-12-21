import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
  HasMany,
  DataType,
  Default
} from "sequelize-typescript";
import User from "./User";
import UserQueue from "./UserQueue";
import Company from "./Company";

import Whatsapp from "./Whatsapp";
import WhatsappQueue from "./WhatsappQueue";
import QueueOption from "./QueueOption";

@Table
class Queue extends Model<Queue> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
  color: string;

  @Default("")
  @Column({
    type: DataType.STRING,
  })
  greetingMessage: string;

  @Default("")
  @Column({
    type: DataType.STRING,
  })
  outOfHoursMessage: string;

  @Column({
    type: DataType.JSONB
  })
  schedules: [];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @BelongsToMany(() => Whatsapp, () => WhatsappQueue)
  whatsapps: Array<Whatsapp & { WhatsappQueue: WhatsappQueue }>;

  @BelongsToMany(() => User, () => UserQueue)
  users: Array<User & { UserQueue: UserQueue }>;

  @HasMany(() => QueueOption, {
    onDelete: "DELETE",
    onUpdate: "DELETE",
    hooks: true
  })
  options: QueueOption[];
}

export default Queue;
