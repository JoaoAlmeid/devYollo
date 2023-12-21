import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  PrimaryKey,
  Default,
  ForeignKey,
  DataType,
  //AllowNull,
  AutoIncrement
} from "sequelize-typescript";
// import Company from "./Company";
import Whatsapp from "./Whatsapp";

@Table
class BaileysChats extends Model<BaileysChats> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  jid: string;

  @Column({
    type: DataType.STRING,
  })
  conversationTimestamp: number | Long;

  @Default(0)
  @Column({
    type: DataType.NUMBER,
  })
  unreadCount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => Whatsapp)
  @Column({
    type: DataType.NUMBER,
  })
  whatsappId: number;
}

export default BaileysChats;
