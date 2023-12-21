import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
  ForeignKey,
  DataType,
  BelongsTo
} from "sequelize-typescript";
import Company from "./Company";
import ContactList from "./ContactList";

@Table({ tableName: "ContactListItems" })
class ContactListItem extends Model<ContactListItem> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @AllowNull(false)
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

  @Column({
    type: DataType.BOOLEAN,
  })
  isWhatsappValid: boolean;

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

  @ForeignKey(() => ContactList)
  @Column({
    type: DataType.INTEGER,
  })
  contactListId: number;

  @BelongsTo(() => ContactList)
  contactList: ContactList;
}

export default ContactListItem;
