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
  Default,
  HasMany,
  ForeignKey,
  BelongsTo,
  DataType
} from "sequelize-typescript";
import ContactCustomField from "./ContactCustomField";
import Ticket from "./Ticket";
import Company from "./Company";
import Schedule from "./Schedule";

@Table
class Contact extends Model<Contact> {
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

  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.STRING,
  })
  number: string;

  @AllowNull(false)
  @Default("")
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Default("")
  @Column({
    type: DataType.STRING,
  })
  profilePicUrl: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
  })
  isGroup: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => Ticket)
  tickets: Ticket[];

  @HasMany(() => ContactCustomField)
  extraInfo: ContactCustomField[];

  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @HasMany(() => Schedule, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    hooks: true
  })
  schedules: Schedule[];
}

export default Contact;
