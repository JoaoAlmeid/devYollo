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
  DataType
} from "sequelize-typescript";
import Campaign from "./Campaign";
import ContactListItem from "./ContactListItem";

@Table({ tableName: "CampaignShipping" })
class CampaignShipping extends Model<CampaignShipping> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.NUMBER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  jobId: string;

  @Column({
    type: DataType.STRING,
  })
  number: string;

  @Column({
    type: DataType.STRING,
  })
  message: string;

  @Column({
    type: DataType.STRING,
  })
  confirmationMessage: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  confirmation: boolean;

  @ForeignKey(() => ContactListItem)
  @Column({
    type: DataType.INTEGER,
  })
  contactId: number;

  @ForeignKey(() => Campaign)
  @Column({
    type: DataType.INTEGER,
  })
  campaignId: number;

  @Column({
    type: DataType.DATE,
  })
  confirmationRequestedAt: Date;

  @Column({
    type: DataType.DATE,
  })
  confirmedAt: Date;

  @Column({
    type: DataType.DATE,
  })
  deliveredAt: Date;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => ContactListItem)
  contact: ContactListItem;

  @BelongsTo(() => Campaign)
  campaign: Campaign;
}

export default CampaignShipping;