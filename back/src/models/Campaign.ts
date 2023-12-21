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

import CampaignShipping from "./CampaignShipping";
import Company from "./Company";
import ContactList from "./ContactList";
import Whatsapp from "./Whatsapp";

@Table({ tableName: "Campaigns" })
class Campaign extends Model<Campaign> {
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
    defaultValue: ""
  })
  message1: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  message2: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  message3: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  message4: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  message5: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  confirmationMessage1: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  confirmationMessage2: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  confirmationMessage3: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  confirmationMessage4: string;

  @Column({
    type: DataType.STRING,
    defaultValue: ""
  })
  confirmationMessage5: string;

  @Column({
    type: DataType.STRING,
  })({ defaultValue: "INATIVA" })
  status: string; // INATIVA, PROGRAMADA, EM_ANDAMENTO, CANCELADA, FINALIZADA

  @Column({
    type: DataType.BOOLEAN,
  })
  confirmation: boolean;

  @Column({
    type: DataType.STRING,
  })
  mediaPath: string;

  @Column({
    type: DataType.STRING,
  })
  mediaName: string;

  @Column({
    type: DataType.STRING,
  })
  scheduledAt: string;

  @Column({
    type: DataType.DATE,
  })
  completedAt: Date;

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

  @ForeignKey(() => Whatsapp)
  @Column({
    type: DataType.INTEGER,
  })
  whatsappId: number;

  @BelongsTo(() => Whatsapp)
  whatsapp: Whatsapp;

  @HasMany(() => CampaignShipping)
  shipping: CampaignShipping[];
}

export default Campaign;
