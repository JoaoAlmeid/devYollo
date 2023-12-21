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

import Company from "./Company";

@Table({ tableName: "CampaignSettings" })
class CampaignSetting extends Model<CampaignSetting> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  key: string;

  @Column({
    type: DataType.STRING,
  })
  value: string;

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
}

export default CampaignSetting;
