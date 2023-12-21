import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
  DataType
} from "sequelize-typescript";
import Company from "./Company";
import ContactListItem from "./ContactListItem";

@Table({ tableName: "ContactLists" })
class ContactList extends Model<ContactList> {
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

  @HasMany(() => ContactListItem, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    hooks: true
  })
  contacts: ContactListItem[];
}

export default ContactList;
