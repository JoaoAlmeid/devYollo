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
  DataType
} from "sequelize-typescript";

@Table
class Plan extends Model<Plan> {
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

  @Column({
    type: DataType.INTEGER,
  })
  users: number;

  @Column({
    type: DataType.INTEGER,
  })
  connections: number;

  @Column({
    type: DataType.INTEGER,
  })
  queues: number;

  @Column({
    type: DataType.NUMBER,
  })
  value: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}

export default Plan;
