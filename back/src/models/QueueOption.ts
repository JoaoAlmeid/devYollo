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
  AllowNull,
  DataType
} from "sequelize-typescript";
import Queue from "./Queue";

@Table
class QueueOption extends Model<QueueOption> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  title: string;

  @AllowNull
  @Column({
    type: DataType.STRING,
  })
  message: string;

  @AllowNull
  @Column({
    type: DataType.STRING,
  })
  option: string;

  @ForeignKey(() => Queue)
  @Column({
    type: DataType.INTEGER,
  })
  queueId: number;

  @ForeignKey(() => QueueOption)
  @Column({
    type: DataType.INTEGER,
  })
  parentId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Queue)
  queue: Queue;

  @BelongsTo(() => QueueOption, { foreignKey: 'parentId' })
  parent: QueueOption;
}

export default QueueOption;
