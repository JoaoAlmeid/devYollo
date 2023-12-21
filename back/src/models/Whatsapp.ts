import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Default,
  AllowNull,
  HasMany,
  Unique,
  BelongsToMany,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import Queue from "./Queue";
import Ticket from "./Ticket";
import WhatsappQueue from "./WhatsappQueue";
import Company from "./Company";

@Table
class Whatsapp extends Model<Whatsapp> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull
  @Unique
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  session: string;

  @Column({
    type: DataType.TEXT,
  })
  qrcode: string;

  @Column({
    type: DataType.STRING,
  })
  status: string;

  @Column({
    type: DataType.STRING,
  })
  battery: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  plugged: boolean;

  @Column({
    type: DataType.NUMBER,
  })
  retries: number;

  @Default("")
  @Column({
    type: DataType.TEXT,
  })
  greetingMessage: string;

  @Default("")
  @Column({
    type: DataType.TEXT,
  })
  farewellMessage: string;

  @Default("")
  @Column({
    type: DataType.TEXT,
  })
  complationMessage: string;

  @Default("")
  @Column({
    type: DataType.TEXT,
  })
  outOfHoursMessage: string;

  @Default("")
  @Column({
    type: DataType.TEXT,
  })
  ratingMessage: string;

  @Column({
    type: DataType.STRING,
    defaultValue: "stable"
  })
  provider: string;

  @Default(false)
  @AllowNull
  @Column({
    type: DataType.BOOLEAN,
  })
  isDefault: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => Ticket)
  tickets: Ticket[];

  @BelongsToMany(() => Queue, () => WhatsappQueue)
  queues: Array<Queue & { WhatsappQueue: WhatsappQueue }>;

  @HasMany(() => WhatsappQueue)
  whatsappQueues: WhatsappQueue[];

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @Column({
    type: DataType.STRING,
  })
  token: string;

  @Default(0)
  @Column({
    type: DataType.NUMBER,
  })
  timeSendQueue: number;

  @Column({
    type: DataType.INTEGER,
  })
  sendIdQueue: number;

}

export default Whatsapp;
