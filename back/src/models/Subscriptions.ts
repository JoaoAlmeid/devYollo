import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  DataType
} from "sequelize-typescript";

@Table
class Subscriptions extends Model<Subscriptions> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  isActive: boolean;

  @AllowNull(true)
  @Column({
    type: DataType.NUMBER,
  })
  userPriceCents: number;

  @AllowNull(true)
  @Column({
    type: DataType.NUMBER,
  })
  whatsPriceCents: number;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
  lastInvoiceUrl: string;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
  })
  lastPlanChange: Date;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
  })
  expiresAt: Date;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
  providerSubscriptionId: string;

  @Column({
    type: DataType.INTEGER,
  })
  companyId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Subscriptions;
