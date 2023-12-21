import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  ForeignKey,
  BelongsTo,
  DataType
} from "sequelize-typescript";
import Queue from "./Queue";
import Whatsapp from "./Whatsapp";

@Table
class WhatsappQueue extends Model<WhatsappQueue> {
  @ForeignKey(() => Whatsapp)
  @Column({
    type: DataType.INTEGER,
  })
  whatsappId: number;

  @ForeignKey(() => Queue)
  @Column({
    type: DataType.INTEGER,
  })
  queueId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Queue)
  queue: Queue;
}

export default WhatsappQueue;
